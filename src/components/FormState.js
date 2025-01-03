// FormState.js
import React, { useState } from 'react';
import Card from './Card';

const FormState = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', { fullName, email, password, passwordConfirmation });
    
    setFullName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  return (
    <Card title="Form with useState">
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Full Name" />
        <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <input id="password_confirmation" type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
