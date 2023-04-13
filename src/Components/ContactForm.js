import './ContactFormStyle.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import React, { useState } from 'react'

// const defaulValue = {
//   name : "",
//   email : "",
//   subject : "",
//   message : ""
// };

const ContactForm = () => {

  const[user, setUser] = useState({
    name : "",
    email : "",
    subject : "",
    message : ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, subject, message} = user;
    if(name && email && subject && message ){
      axios.post("http://localhost:5000", user)
      .then((response) => { console.log(response)  } )
    };

    navigate('/submited')
  };

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} required></input>
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} required></input>
            <label>Subject</label>
            <input type="text" name="subject" value={user.subject} onChange={handleChange} required></input>
            <label>Message</label>
            <textarea rows="6" name="message" value={user.message} onChange={handleChange} required placeholder='Type your message here' />
            <button className='btn' type="submit">Submit</button>
        </form> 
    </div>
  )
}

export default ContactForm