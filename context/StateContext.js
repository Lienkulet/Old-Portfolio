import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {

  const [showMenu, setShowMenu] = useState(false);
  const regexEmail = /([a-zA-Z0-9.\-_]{6,30})@([a-z]{2,10})\.([a-zA-Z]{2,5})/;
  const regexName = /^[A-Z][a-z]{2,10}\s[A-Z][a-z]{2,10}/g;

  const [nameOk, setNameOk] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [messageOk, setMessageOk] = useState(false);
  const [emaiSentOk, setEmaiSentOk] = useState(false);
  const [subjectOk, setSubjectOk] = useState(false);

  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const checkEmail = () => {
    if (regexEmail.test(email)) {
      // console.log('Email is ok');
      setEmailOk(true);
    } else {
      // console.log('Email not ok');
      setEmailOk(false);
    }
  }

  const checkName = () => {
    if (regexName.test(personName)) {
      // console.log('Name is ok');
      setNameOk(true);
    } else {
      // console.log('Name not ok');
      setNameOk(false)
    }
  }

  const checkMessage = () => {
    if (message != '') {
      // console.log('Message is ok');
      setMessageOk(true);
    } else {
      // console.log('Message not ok');
      setMessageOk();
    }
  }

  return (
    <Context.Provider value={{
      showMenu,
      setShowMenu,
      personName,
      setPersonName,
      email,
      setEmail,
      message,
      setMessage,
      checkMessage,
      checkEmail,
      checkName,
      messageOk, 
      emailOk,
       nameOk,
       emaiSentOk,
       subject, 
       setSubject,
       subjectOk, 
       setSubjectOk
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);