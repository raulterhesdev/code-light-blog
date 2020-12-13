export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.darkerGrey};
  padding: 24px 16px;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;

  p {
    a {
      color: ${({ theme }) => theme.primary};
      text-decoration-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const AcceptButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  margin-top: 24px;
`;

export const DeclineButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 18px;
  background-color: transparent;
  color: ${({ theme }) => theme.lighterGrey};
  cursor: pointer;
`;
