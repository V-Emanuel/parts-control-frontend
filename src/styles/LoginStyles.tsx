import styled from 'styled-components';
import bg from '../assets/imgs/bg.jpg';

export const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .login-content {
    width: 74%;
    height: 74%;
    display: flex;
    border: 1px solid #f8f8f8;
    .left-content {
      width: 60%;
      height: 100%;
      background-color: #09152f;
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
      background-color: #ffffff;

      p {
        font-size: 58px;
        font-weight: 800;
        margin-bottom: 30px;
        color: #09152f;
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
          border: 1px solid #09152f !important;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
      }
      button {
        width: 140px;
        height: 50px;
        margin-top: 10px;
        border-radius: 10px;
        border: 1px solid #ffffff;
        background-color: #09152f;
        color: #ffffff;
        font-size: 16px;
        font-weight: 800;
        transition: 300ms;

        &:hover {
          cursor: pointer;
          scale: 1.06;
          background-color: #ffffff;
          border-color: #09152f;
          color: #09152f;
        }
      }
    }
  }
`;
