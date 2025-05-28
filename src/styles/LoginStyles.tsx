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
    width: 80%;
    height: 80%;
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
      position: relative;

      .loading-open {
        display: flex;
      }

      .loading-close {
        display: none;
      }

      .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #000;
        opacity: 0.5;
        top: 0px;
        align-items: center;
        justify-content: center;

        img {
          width: 70px;
        }
      }

      p {
        font-size: 58px;
        font-weight: 800;
        margin-bottom: 10px;
        color: ${theme.colors.secondary};
      }

      label {
        width: 380px;
        margin-bottom: 4px;
        margin-top: 20px;
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
        margin-bottom: 6px;
        outline: none;
        transition: 300ms;

        &:focus {
          border: 1px solid ${theme.colors.secondary} !important;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }
      }

      .failed-login {
        width: 370px;
        margin-top: 4px;
        color: #ff0000;
        font-weight: 500;
        font-size: 14px;
        font-style: italic;
      }

      .text-open {
        display: block;
      }

      .text-close {
        display: none;
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
          background-color: #ffffff;
          border-color: ${theme.colors.secondary};
          color: ${theme.colors.secondary};
        }
      }
    }
  }

  @media (max-width: 1650px) {
    .login-content {
      .left-content {
        h1 {
          font-size: 64px;
        }
      }

      .login-form {
        .loading {
          img {
            width: 50px;
          }
        }

        p {
          font-size: 48px;
          margin-bottom: 6px;
        }

        label {
          width: 300px;
          margin-bottom: 2px;
          margin-top: 16px;
          font-size: 14px;
        }

        input {
          width: 300px;
          height: 36px;
          border-radius: 6px;
          padding: 0px 6px 0px 6px;
          margin-bottom: 4px;
        }

        .failed-login {
          width: 300px;
          font-size: 12px;
        }

        button {
          width: 130px;
          height: 42px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 1270px) {
    .login-content {
      max-width: 500px;
      min-width: 340px;
      height: 90%;
      display: flex;
      flex-direction: column;
      position: relative;

      .left-content {
        width: 100%;
        height: 70px;
        position: absolute;
        z-index: 999;
        h1 {
          font-size: 24px;
          text-align: center;
        }
      }

      .login-form {
        box-sizing: border-box;
        padding-top: 160px;
        width: 100%;
        height: 100%;

        p {
          font-size: 46px;
        }

        label {
          width: 80%;
        }

        input {
          width: 80%;
        }

        .failed-login {
          width: 80%;
        }
      }
    }
  }
`;
