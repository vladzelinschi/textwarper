import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import { SMALL_BP } from './Constants';

const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    background-color: rgba(255, 255, 255, 0.25);

    margin: ${(props) =>
      props.orientation === 'vertical' ? '0 2rem 0' : '2rem 0'};

    @media screen and (max-width: ${SMALL_BP}) {
      margin: ${(props) =>
        props.orientation === 'vertical' ? '0 1rem 0' : '1rem 0'};
    }
  }
`;

export default StyledDivider;
