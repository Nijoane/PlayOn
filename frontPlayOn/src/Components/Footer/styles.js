import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--white);
  border-top: 2px solid;
  border-color: tomato;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 15px;
  padding-bottom: 2px;
  color: var(--black);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
