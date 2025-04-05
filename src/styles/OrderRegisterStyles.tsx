import styled from 'styled-components';
import theme from './theme';

export const OrderRegisterStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background-color: red;

  .form-content {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 100px;
    background-color: #fff;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-bottom: 60px;
    padding-left: 280px;

    h1 {
      font-size: 40px;
      color: ${theme.colors.secondary};
      font-weight: 800;
      margin-bottom: 30px;
    }

    .order-form {
      width: 600px;
      height: max-content;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .type-date {
        width: 49% !important;
      }

      .input-container {
        width: 100%;
        height: max-content;

        label {
          width: 100%;
          display: flex;
          margin-bottom: 4px;
          font-size: 18px;
          color: ${theme.colors.secondary};
          font-weight: 300;
          strong {
            color: #ff0000;
          }
        }
        input,
        select {
          width: 100%;
          height: 42px;
          border-radius: 8px;
          border: 1px solid #ffffff;
          background-color: #dddddd;
          box-sizing: border-box;
          padding: 0px 10px 0px 10px;
          margin-bottom: 26px;
          outline: none;
          transition: 300ms;
          font-weight: 400;

          &:focus {
            border: 1px solid ${theme.colors.secondary} !important;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          }
        }
      }

      .btn-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
  }
`;
