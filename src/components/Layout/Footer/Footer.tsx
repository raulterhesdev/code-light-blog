import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>(null);

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
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
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
        {error ? <p>{error}</p> : null}
        <button type='submit'>Subscribe to newsletter!</button>
      </form>
    </footer>
  );
};

export default Footer;
