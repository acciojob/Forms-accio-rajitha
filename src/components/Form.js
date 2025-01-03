// Form.js
import React from 'react';
import Card from './Card';

const Form = () => {
  return (
    <Card title="Form Layout">
      <form id="info-form">
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" id="password_confirmation" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;
