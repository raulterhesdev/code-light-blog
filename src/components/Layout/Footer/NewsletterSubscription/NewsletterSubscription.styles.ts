import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px 0;
`;

export const Input = styled.input`
  padding: 16px 20px;
  font-size: 1rem;
  width: 40%;
  min-width: 300px;
  max-width: 450px;
  margin: 24px 0;
  background-color: ${({ theme }) => theme.darkGrey};
  border: 1px solid ${({ theme }) => theme.primaryDark};
  outline: none;
  color: ${({ theme }) => theme.white};

  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryLight};
  }
`;

export const Error = styled.p`
  color: red;
`;

export const SubscribeButton = styled.button`
  padding: 16px 20px;
  width: 40%;
  min-width: 300px;
  max-width: 450px;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;
