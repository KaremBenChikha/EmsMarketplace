import React, { useState ,useRef} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'
import './styles.css'
import { mobile } from "../../responsive";

const Style = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: #f5fbfd;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  
`;
const Button2 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 2rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 4rem;
  border-radius: 8px;
  cursor: pointer;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export default function ContactForm() {
  const form = useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
  
    emailjs.sendForm('service_1okm3zx','template_z0h8btm',form.current, 'lxCh0avzDn5Hh5T9F'
    ).then(res=>{
      console.log(res.text);
      console.log("message sent");
    }).catch(err=>console.log(err));
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <Style ref={form}
        style={{margin:"25px 85px 75px 100px"}}
        onSubmit={sendEmail}
      >
        <div className='::-ms-input-placeholder'>
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              className='form-control'
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="::-ms-input-placeholder">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              className='form-control'
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="::-ms-input-placeholder">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              className='form-control'
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <Button2 type="submit" style={{marginTop: "30px"}}>Send</Button2>
        
        </Style>
    </>
  );
}