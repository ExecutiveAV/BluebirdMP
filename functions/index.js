const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({
  origin: true,
});

admin.initializeApp();
const db = admin.firestore();

const sgMail = require("@sendgrid/mail");

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;

sgMail.setApiKey(API_KEY);

exports.bookingEmail = functions.https.onCall((data, contetx) => {
  const { firstName, lastName, email, phoneNumber, typeOfSession, day, time, message } = data;
  const confirmationNumber = "696969";

  const msg = {
    to: email,
    from: "alejandro@executiveav.llc",
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: `Booking confirmation. Thanks ${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      confirmationNumber: confirmationNumber,
      typeOfSession: typeOfSession,
      date: day,
      time: time,
    },
  };

  sgMail.send(msg)
    .then((response) => {
      console.log("Status Code: ", response[0].statusCode)
      console.log("Headers: ", response[0].headers)
    })
    .catch((error) => {
      console.error("Sendgrid Error: ", error);

      if (error.response) {
        console.error("Sendgrid Error Body: ", error.response.body)
      }
    })
});