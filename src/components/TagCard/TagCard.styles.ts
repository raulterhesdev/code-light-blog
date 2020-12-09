import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  margin: 0 0 16px 0;
  padding: 32px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #00000029;
  width: 100%;
  color: ${({ theme }) => theme.black};
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.7rem;
`;

export const Description = styled.p`
  padding: 32px 0;
  text-align: center;
`;

export const CtaWrapper = styled.div`
  align-self: flex-end;
`;
