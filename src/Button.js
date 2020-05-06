import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { SMALL_BP } from './Constants';

const StyledButton = styled(Button)`
  &.MuiButton-root {
    margin-top: 2rem;

    @media screen and (max-width: ${SMALL_BP}) {
      margin-top: 1rem;
    }
  }
`;

export default StyledButton;
