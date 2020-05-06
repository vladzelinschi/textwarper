import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    Made with love by{' '}
    <a href="https://www.vladzelinschi.com/" title="Vlad Zelinschi">
      Vlad Zelinschi
    </a>
  </StyledFooter>
);

export default Footer;
