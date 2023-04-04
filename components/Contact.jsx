import React, { useState, useEffect } from 'react';
import { useStateContext } from '@/context/StateContext';
import { sendContactForm } from '@/lib/api';
import { toast } from 'react-hot-toast';

const Contact = () => {

  const {  personName, setPersonName, email, setEmail, message, setMessage, checkMessage,
    checkEmail, checkName,  messageOk, emailOk, nameOk, subject, setSubject, subjectOk, setSubjectOk } = useStateContext();

  const sendEmail = async () => {
      let values = {
        name: personName, 
        email: email,
         message: message
      }
      try {
        // await sendContactForm(values);
        setPersonName('');
        setEmail('');
        setMessage('');
        toast.promise(sendContactForm(values), {
          success:  'Email sent successfuly!',
          loading: 'Loading',
          error: 'Error while sending email'
        }
         );
      } catch (error) {
       toast.error("Please introduce the right values");
      }
    }

  return (
    <section  className='Container' id='contact'>
    

      <div className="contact-form">     
      <div className="header">
          <h3>Get in touch</h3>
          <h1>Contact.</h1>
        </div>
        <form className="contact-infos" method='POST' onSubmit={e => {
          e.preventDefault();

          if(messageOk && nameOk && emailOk){
            sendEmail();
          } else {
            toast.error('Please complete all the spaces correctly');
          }
          
        }}>
          <div className="contact-block">
          <div className="column">
          <div className="contact-info">
            <h4>Your First and Last name</h4>
            <input type="text" value={personName} 
            onChange={(event) => {
              setPersonName(event.target.value);
              checkName()
            }} 
            placeholder={"What's your name?"}/>
          </div>
          <div className="contact-info">
            <h4>Your Email</h4>
            <input type="email" value={email} onChange={(event) => {
              setEmail(event.target.value);
              checkEmail();
            }}
             placeholder={"What's your email?"}/>
          </div>
          </div>
          <div className="column">
          <div className="contact-info">
            <h4>Your Message</h4>
            <textarea name="message" value={message} onChange={(event) => {
              setMessage(event.target.value);
              checkMessage()
            }}
               rows="7" placeholder="What's your message?"></textarea>
          </div>
          <button
           type='submit' 
           className='contactBtn'
           >
            Send
           </button>
          </div>
          </div>
        </form>
    </div>
    
    <div className="contact-details">
      <div className="contact-detail">
      <h1>Email:</h1>
      <h3>clocicovalexandru@gmail.com</h3>
      </div>
      <div className="contact-detail">
      <h1>Phone:</h1>
      <h3>+(373) 78789732</h3>
      </div>
      <div className="socials">

      </div>
    </div>
    </section >
  )
}

export default Contact