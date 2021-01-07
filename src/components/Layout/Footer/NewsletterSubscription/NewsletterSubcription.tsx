import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {
  Form,
  Input,
  Error,
  SubscribeButton,
  Message,
  Paragraph,
  Notice,
} from './NewsletterSubscription.styles';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>(null);
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);

  const validateEmail = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    return false;
  };

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail()) {
      try {
        await addToMailchimp(email);
        setShowSubscribeSuccess(true);
        setTimeout(() => {
          setShowSubscribeSuccess(false);
        }, 3000);
      } catch (_) {
        setError(
          'There was a problem with the subscription. Please try again later!'
        );
      }
    } else {
      setError('Please enter a valid email!');
    }
  };

  return (
    <Form onSubmit={subscribe}>
      {showSubscribeSuccess && <Notice>Thank you for subscribing!</Notice>}
      <Message>Subscribe to the newsletter!</Message>
      <Paragraph>
        You will receive periodical emails with new released articles!
      </Paragraph>
      <Input
        type='text'
        placeholder='Email...'
        value={email}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setEmail(e.currentTarget.value)
        }
      />
      {error ? <Error>{error}</Error> : null}
      <SubscribeButton type='submit'>Subscribe to newsletter!</SubscribeButton>
    </Form>
  );
};

export default NewsletterSubscription;
