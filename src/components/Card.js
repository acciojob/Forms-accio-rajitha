// Card.js
import React from 'react';
import './../styles/Card.css';

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;

/*
import React from 'react';
import './../styles/Card.css';

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
*/