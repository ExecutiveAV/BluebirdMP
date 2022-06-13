import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

import banner from '../../assets/images/bookings.png';

import "./booking.style.scss";

const Booking = () => {
    const [date, setDate] = useState(null);
    const [calendar, toggleCalendar] = useState(false);
    const [booking, setBooking] = useState("");
    const [submission, setSubmission] =useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [session, setSession] = useState("");
    const [formattedDate, setFormattedDate] = useState("")
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");
    const [daytime, setDaytime] = useState("");
    const [message, setMessage] = useState("")

    const ifEmpty = string => {
        return string.length === 0 ? false : true;
    }

    const validateDate = testdate => {
        const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        console.log(date_regex.test(testdate));
    }

    const submissionHandler = () => {
        if (submission === true) {
            setSubmission(false);
        } else {
            setSubmission(true);
        }
    }

    const dateFormatter = string => {
        let unformattedDate = JSON.stringify(string).split("T")[0].replace(/(-)/g, "/");
        unformattedDate = unformattedDate.split('"');
        unformattedDate = unformattedDate[1].split("/");
        unformattedDate.push(unformattedDate.splice(0, 1)[0])
        unformattedDate =  unformattedDate.join("/");
        setFormattedDate(unformattedDate)
        return unformattedDate;
    }

    const dateHandler = (calendarDate) => {
        setDate(calendarDate);
        let verifiedDate = dateFormatter(calendarDate);
        setBooking(verifiedDate);
        handleCalendarToggle();
    }

    //Create transparent background to click out of the calendar ;) (L)
    const handleCalendarToggle = () => {
        if (calendar === true) {
            toggleCalendar(false);
        } else {
            toggleCalendar(true);
        }
    }
   
    const firebaseConfig = {
        apiKey: "",
        authDomain: "bluebirdmp-d5c19.firebaseapp.com",
        projectId: "bluebirdmp-d5c19",
        storageBucket: "bluebirdmp-d5c19.appspot.com",
        messagingSenderId: "28101586112",
        appId: "",
      };
    const app = initializeApp(firebaseConfig);

    const functions = getFunctions(app);
    const bookingEmail = httpsCallable(functions, "bookingEmail");
    const emailBody = {
      firstName: firstName,
      lastName: lastName,
      confirmationNumber: "696969",
      typeOfSession: session,
      date: formattedDate,
      time: `${hour}:${minutes} ${daytime}`,
      email: email,
      message: message,
    };

    const sendEmailNow = () => {
        bookingEmail(emailBody)
        .then(result => {
            const data = result.data;
            console.log(data.text);
        }).catch(err => {
            console.error(err);
        })
    }

    return (
        <section className='booking'>

            {
                submission ? <section className='booking__confirmation' onClick={submissionHandler} >
                    <section className='booking__confirmation__container' >
                        <p className='booking__confirmation__container__X' >X</p>
                        <p className='booking__confirmation__container__title' >All Done!</p>
                        <p className='booking__confirmation__container__text' >Thank you for your inquiry. We will have someone reach out to you with more information regarding your request.</p>
                    </section>
                </section> : null
            }

            <section className='booking__banner' >
                <img src={banner} className='booking__banner__src' alt="Jill holding a camera and smiling" />
            </section>
            <section className='booking__form' >
                <p className='booking__form__title' >BOOKINGS</p>
                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >Name:</p>
                    <section className='booking__form__field__inputs' >
                        <input className='booking__form__field__inputs__input i' placeholder='First Name' onChange={e => setFirstName(e.target.value)} />
                        <input className='booking__form__field__inputs__input i' placeholder='Last Name'onChange={e => setLastName(e.target.value)} />
                    </section>
                </section>
                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >E-mail Address:</p>
                    <section className='booking__form__field__inputs' >
                        <input className='booking__form__field__inputs__input' placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
                    </section>
                </section>
                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >Type of Sessions:</p>
                    <section className='booking__form__field__inputs' >
                        <input className='booking__form__field__inputs__input' placeholder='Choose an Option' onChange={e => setSession(e.target.value)} />
                    </section>
                </section>
                <section className='booking__form__fields' >
                    <section className='booking__form__fields__field' >
                        <p className='booking__form__fields__field__title' >Dates:</p>
                        <section className='booking__form__fields__field__inputs' >
                            <input 
                            onClick={handleCalendarToggle}
                            className='booking__form__fields__field__inputs__input' placeholder='dd/mm/yyyy'
                            id="dates" name='dates' value={booking}/>
                        </section>
                        {calendar ?
                            <section className='booking__form__fields__field__calendar' >
                                <section className='booking__form__fields__field__calendar__background' onClick={handleCalendarToggle} />
                                <Calendar
                                    className='booking__form__fields__field__calendar__calendar'
                                    date={new Date()}
                                    minDate={new Date()}
                                    onChange={item => dateHandler(item)}
                                    autocomplete="off"
                                />
                            </section> :
                            null
                        }
                    </section>
                    <section className='booking__form__fields__field' >
                        <p className='booking__form__fields__field__title' >Times:</p>
                        <section className='booking__form__fields__field__times' >
                            <select className='booking__form__fields__field__times__hours' name="hours" id="hours" value={hour} onChange={(e) => setHour(e.target.value)}>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <p>:</p>
                            <select className='booking__form__fields__field__times__minutes' name="minutes" id="minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)}>
                                <option value="00">00</option>
                                <option value="30">30</option>
                            </select>
                            <select className='booking__form__fields__field__times__noon' value={daytime} onChange={(e) => {setDaytime(e.current.value)}} >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </section>
                    </section>
                </section>
                {/* time: 3 separe range inputs to select by block*/}

                <section className='booking__form__field' >
                    <p className='booking__form__field__title' >Message:</p>
                    <section className='booking__form__field__inputs' >
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} type="text" className='booking__form__field__inputs__textarea' placeholder='Type here' />
                    </section>
                </section>
                <p className='booking__form__CTA' onClick={() => sendEmailNow()} >SUBMIT</p>
            </section>
        </section>
    );
};

export default Booking;