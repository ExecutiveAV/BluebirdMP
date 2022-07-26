import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import firebaseConfig from '../../firebaseConfig';

import banner from '../../assets/images/bookings.png';

import Portal from '../../containers/createPortal/createPortal';
import Loader from '../../components/loader/loader.component';

import "./booking.style.scss";

const Booking = () => {
    const [submission, setSubmission] =useState(false);

    const [isLoading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [session, setSession] = useState("");
    const [formattedDate, setFormattedDate] = useState("")
    const [hour, setHour] = useState("");
    const [message, setMessage] = useState("");

    //Warning System

    const [firstNameWarning, setFirstNameWarning] = useState(false);
    const [lastNameWarning, setLastNameWarning] = useState(false);
    const [emailWarning, setEmailWarning] = useState(false);
    const [sessionWarning, setSessionWarning] = useState(false);
    const [dateWarning, setDateWarning] = useState(false);
    const [timeWarning, setTimeWarning] = useState(false);

    const [submitStatus, setSubmitStatus] = useState(null);
    const [confirmationNumber, setConfirmationNumber] = useState("")

    const isEmpty = string => {
        return string.length === 0 ? true : false;
    }

    const validateDate = testdate => {
        const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        return date_regex.test(testdate);
    }

    const submissionHandler = () => {
        // Display submission status
        if (submission === true) {
            setSubmission(false);
        } else {
            setSubmission(true);
        }
    };

    const dateFormatter = string => {
        let unformattedDate = string.split("-");
        let buildingDate = [];
        buildingDate.push(unformattedDate[1]);
        buildingDate.push(unformattedDate[2]);
        buildingDate.push(unformattedDate[0]);
        buildingDate = buildingDate.join("/");
        if (validateDate(buildingDate) === true) {
            setFormattedDate(buildingDate)
            return true;
        }
        return false;
    };
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const databaseHandler = async () => {
        try {
            const docRef = await addDoc(collection(db, "bookings"), {
                name: "",
                date: "",
                hours: [],
                sessionType: "",
            })
            console.log("Doc ID: ", docRef);
        } catch(e) {
            console.error(e);
        }
    };

    const generateConfirmationNumber = () => {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 6; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        };
        return token;
    };

    const functions = getFunctions(app);
    const bookingEmail = httpsCallable(functions, "bookingEmail");
    const emailBody = {
      firstName: firstName,
      lastName: lastName,
      confirmationNumber: generateConfirmationNumber(),
      typeOfSession: session,
      date: formattedDate,
      time: hour,
      email: email,
      message: message,
    };

    const sendEmailNow = () => {
        if (!validateAll()) {
            setLoading(true)
            bookingEmail(emailBody)
            .then(result => {
                submissionHandler()
                setSubmitStatus(true);
                setLoading(false)
            }).catch(err => {
                submissionHandler()
                setSubmitStatus(false);
                setLoading(false)
                console.error("error: ", err);
            })
        }
        
    };

    const formatTime = time => {
        let formatTime = time.split(":");
        let meridian = "";
        let hour = formatTime[0];
        if (hour > 11) {
            meridian = " PM";
            if (hour > 12) {
                hour = hour - 12;
            }
        } else {
            meridian = " AM";
        }
        formatTime[0] = hour
        formatTime = formatTime.join(":");
        formatTime = formatTime.concat(meridian);
        setHour(formatTime);
    }

    const setWarning = (field, setFieldWarning) => {
        if (isEmpty(field)) {
            setFieldWarning(true);
            return true;
        };
        setFieldWarning(false)
        return false;
    };

    const validateAll = () => {
        let values = [];
        values.push(setWarning(firstName, setFirstNameWarning));
        values.push(setWarning(lastName, setLastNameWarning));
        values.push(setWarning(email, setEmailWarning));
        values.push(setWarning(session, setSessionWarning));
        values.push(setWarning(formattedDate, setDateWarning));
        values.push(setWarning(hour, setTimeWarning));
        return values.includes(true);
    };

    return (
        <section className='booking'>

            {
                submission ?
                (
                    submitStatus === true ?
                        <section className='booking__confirmation' onClick={submissionHandler} >
                            <section className='booking__confirmation__container' >
                                <p className='booking__confirmation__container__X' >X</p>
                                <p className='booking__confirmation__container__title' >All Done!</p>
                                <p className='booking__confirmation__container__text' >Thank you for your inquiry. We will have someone reach out to you with more information regarding your request.</p>
                            </section>
                        </section> :
                        <section className='booking__confirmation' onClick={submissionHandler} >
                        <section className='booking__confirmation__container' >
                            <p className='booking__confirmation__container__X' >X</p>
                            <p className='booking__confirmation__container__title' >Something went wrong! :/</p>
                            <p className='booking__confirmation__container__text' >That was weird. We couldn't complete the request. Please try again or contact us directly at (123) 456-7899</p>
                        </section>
                    </section>
                ) :
                null
            }

            <section className='booking__banner' >
                <img src={banner} className='booking__banner__src' alt="Jill holding a camera and smiling" />
            </section>
            <section className='booking__form' >
                <p className='booking__form__title' >BOOKINGS</p>
                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >* Name:</p>
                    <section className='booking__form__field__inputs' >
                        <input className={`booking__form__field__inputs__input i ${firstNameWarning ? "warning" : ""}`} placeholder='First Name' onChange={e => setFirstName(e.target.value)} />
                        <input className={`booking__form__field__inputs__input i ${lastNameWarning ? "warning" : ""}`} placeholder='Last Name'onChange={e => setLastName(e.target.value)} />
                    </section>
                </section>
                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >* E-mail Address:</p>
                    <section className='booking__form__field__inputs' >
                        <input className={`booking__form__field__inputs__input ${emailWarning ? "warning" : ""}`} placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
                    </section>
                </section>
                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >* Type of Sessions:</p>
                    <section className='booking__form__field__inputs' >
                        <select className={`booking__form__field__inputs__input ${sessionWarning ? "warning" : ""}`} placeholder='Choose an Option' onChange={e => setSession(e.target.value)} >
                            <option selected disabled >-- Select an option --</option>
                            <option >Portraits</option>
                            <option >Baby Photos</option>
                            <option >Landscape</option>
                        </select>
                    </section>
                </section>
                <section className='booking__form__fields' >
                    <section className='booking__form__fields__field' >
                        <p className='booking__form__fields__field__title' >* Dates:</p>
                        <section className='booking__form__fields__field__inputs' >
                            <input 
                            onChange={e => dateFormatter(e.target.value)}
                            type="date"
                            className={`booking__form__fields__field__inputs__input ${dateWarning ? "warning" : ""}`} placeholder='dd/mm/yyyy'
                            id="dates" name='dates'/>
                        </section>
                    </section>
                    <section className='booking__form__fields__field' >
                        <p className='booking__form__fields__field__title' >* Times:</p>
                        <section className='booking__form__fields__field__times' >
                            <input placeholder='10:00 AM' type="time" className={`booking__form__fields__field__times__hours ${timeWarning ? "warning" : ""}`} name="hours" id="hours" onChange={(e) => formatTime(e.target.value)} />
                        </section>
                    </section>
                </section>

                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >Message:</p>
                    <section className='booking__form__field__inputs' >
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} type="text" className='booking__form__field__inputs__textarea' placeholder='Type here' />
                    </section>
                </section>
                <p className='booking__form__CTA' onClick={() => sendEmailNow()} >SUBMIT</p>
            </section>

            {
                isLoading ? 
                    <Portal className="loaderPortal" >
                        <Loader /> 
                    </Portal> :
                null
            }
        </section>
    );
};

export default Booking;