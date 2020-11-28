import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const subscribe = (e) => {
    e.preventDefault();
    console.log('Validate and Submit Form here');
  };

  return (
    <footer>
      <form onSubmit={subscribe}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Subscribe to newsletter!</button>
      </form>
    </footer>
  );
};

export default Footer;
