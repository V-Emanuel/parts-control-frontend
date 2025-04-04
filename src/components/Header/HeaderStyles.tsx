import styled from 'styled-components';

export const HeaderStyles = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: 300px;
  position: fixed;
  top: 0px;

  p {
    font-size: 22px;
    font-weight: 600;
    color: #000;
  }

  :nth-child(2) {
    position: absolute;
    right: 24px;
    font-size: 38px;
    color: #6bc213;
  }
`;
