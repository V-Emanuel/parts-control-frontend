import styled from 'styled-components';
import { sideBarWidth } from './theme';

export const UserStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: red;
  box-sizing: border-box;
  padding-top: 80px;
  padding-left: calc(${sideBarWidth} + 70px);
`;
