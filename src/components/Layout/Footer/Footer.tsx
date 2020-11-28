import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>(null);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Validate and Submit Form here');
    const result = await addToMailchimp(email);
    console.log(result);
  };

  return (
    <footer>
      <form onSubmit={subscribe}>
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
