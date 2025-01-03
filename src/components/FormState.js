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
    console.log({ fullName, email, password, passwordConfirmation });

    setFullName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  return (
    <Card title="Form with useState">
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;


/*
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
*/