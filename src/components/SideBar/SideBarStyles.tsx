import styled from 'styled-components';

export const SideBarStyles = styled.header`
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 14px 0px 0px 0px;
  background-color: #eff3f6;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 99;

  .box-title {
    width: 90%;
    height: 46px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    p {
      color: #000;
    }

    .peugeot-icon {
      height: 50%;
      margin-right: 5px;
      opacity: 0.7;
    }
  }
`;
