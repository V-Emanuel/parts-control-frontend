import styled from 'styled-components';
import theme from '../../styles/theme';

export const SideBarStyles = styled.header`
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 20px 20px 20px;
  background-color: #eff3f6;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 99;

  .box-title {
    width: max-content;
    height: max-content;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    .user-icon {
      font-size: 26px;
      margin-right: 10px;
      color: ${theme.colors.textColor};
    }

    p {
      color: ${theme.colors.textColor};
      font-size: 16px;
      font-weight: 400;
    }
  }

  .side-options {
    width: max-content;
    height: max-content;

    .option {
      width: max-content;
      height: max-content;
      box-sizing: border-box;
      padding: 6px 20px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 300ms;
      text-decoration: none;
      margin-bottom: 16px;

      :nth-child(1) {
        font-size: 18px;
        font-weight: 900;
        margin-right: 8px;
        color: ${theme.colors.textColor};
      }

      h1 {
        font-size: 13px;
        font-weight: 700;
        color: ${theme.colors.textColor};
      }

      &:hover {
        background-color: #b8b8b8;
        cursor: pointer;

        * {
          color: #ffffff;
        }
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.textColor};
    margin-top: 10px;
  }
`;
