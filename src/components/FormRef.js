// FormRef.js
import React, { useRef } from 'react';
import Card from './Card';

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value
    };

    console.log('Form submitted with useRef:', formData);
    
    
    fullNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    passwordConfirmationRef.current.value = '';
  };

  return (
    <Card title="Form with useRef">
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" ref={fullNameRef} placeholder="Full Name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} placeholder="Password" />
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input type="password" id="password_confirmation" ref={passwordConfirmationRef} placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
