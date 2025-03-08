import styled from 'styled-components';
import bg from '../assets/imgs/bg.jpg';
import theme from './theme';

export const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.1) 0%),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .login-content {
    width: 76%;
    height: 76%;
    display: flex;
    border: 1px solid #f4f4f4;
    box-shadow:
      rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    .left-content {
      width: 60%;
      height: 100%;
      background-color: ${theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 80px;
        font-weight: 800;
        color: #ffffff;
        text-align: left;
      }
    }

    .login-form {
      width: 40%;
      height: 100%;
      box-sizing: border-box;
      padding-top: 12%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: #f4f4f4;

      p {
        font-size: 58px;
        font-weight: 800;
        margin-bottom: 30px;
        color: ${theme.colors.secondary};
      }

      label {
        width: 380px;
        margin-bottom: 4px;
        font-size: 16px;

        strong {
          color: #ff0000;
        }
      }

      input {
        width: 380px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #ffffff;
        background-color: #dddddd;
        box-sizing: border-box;
        padding: 0px 10px 0px 10px;
        margin-bottom: 26px;
        outline: none;
        transition: 300ms;

        &:focus {
          border: 1px solid ${theme.colors.secondary} !important;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }
      }
      button {
        width: 140px;
        height: 50px;
        margin-top: 10px;
        border-radius: 10px;
        border: 1px solid #ffffff;
        background-color: ${theme.colors.secondary};
        color: #ffffff;
        font-size: 16px;
        font-weight: 800;
        transition: 300ms;

        &:hover {
          cursor: pointer;
          scale: 1.06;
          background-color: #ffffff;
          border-color: ${theme.colors.secondary};
          color: ${theme.colors.secondary};
        }
      }
    }
  }
`;
