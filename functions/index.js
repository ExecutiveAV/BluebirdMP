const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({
  origin: true,
});

admin.initializeApp();
const db = admin.firestore();

const sgMail = require("@sendgrid/mail");

const API_KEY = process.env.SENDGRIDAPI;
const CLIENT_TEMPLATE_ID = process.env.CLIENT_TEMPLATE;
const STUDIO_TEMPLATE_ID = process.env.STUDIO_TEMPLATE;

sgMail.setApiKey(API_KEY);

exports.bookingEmail = functions.https.onCall((data, contetx) => {
  const { firstName, lastName, email, phoneNumber, typeOfSession, date, time, message, confirmationNumber } = data;

  const studioMsg = {
    to: "alejandro@executiveav.llc",
    from: "alejandro@executiveav.llc",
    templateId: STUDIO_TEMPLATE_ID,
    dynamic_template_data: {
      subject: `Someone booked a ${typeOfSession} session, ${confirmationNumber}`,
      firstName: firstName,
      lastName: lastName,
      confirmationCode: confirmationNumber,
      sessionType: typeOfSession,
      date: date,
      time: time,
      email: email,
      message: message,
    },
  }

  const clientMsg = {
    to: email,
    from: "alejandro@executiveav.llc",
    templateId: CLIENT_TEMPLATE_ID,
    dynamic_template_data: {
      subject: `Booking confirmation. Thanks ${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      confirmationNumber: confirmationNumber,
      typeOfSession: typeOfSession,
      date: date,
      time: time,
    },
  };

  sgMail.send(clientMsg)
    .then((response) => {
      console.log("Status Code: ", response[0].statusCode)
      console.log("Headers: ", response[0].headers)
    })
    .catch((error) => {
      console.error("Sendgrid Error: ", error);

      if (error.response) {
        console.error("Sendgrid Error Body: ", error.response.body)
      }
    });

    sgMail.send(studioMsg)
    .then((response) => {
      console.log("Status Code: ", response[0].statusCode)
      console.log("Headers: ", response[0].headers)
    })
    .catch((error) => {
      console.error("Sendgrid Error: ", error);

      if (error.response) {
        console.error("Sendgrid Error Body: ", error.response.body)
      }
    });
});