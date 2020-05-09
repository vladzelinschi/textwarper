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
    . If you want, you can{' '}
    <a
      href="https://github.com/vladzelinschi/textwarper"
      title="View the source code"
    >
      check out the source code
    </a>{' '}
    of the project.
  </StyledFooter>
);

export default Footer;
