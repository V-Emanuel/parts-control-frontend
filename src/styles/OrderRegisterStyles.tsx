import styled from 'styled-components';
import theme, { sideBarWidth } from './theme';

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
    padding-left: ${sideBarWidth};

    /*MODAISSS --------------------------------- */
    .modal-display {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;

      .modal-content {
        background: #fcfcfc;
        padding: 30px 60px 30px 60px;
        border-radius: 8px;
        width: max-content;
        height: max-content;
        text-align: center;
        color: ${theme.colors.secondary};

        p {
          font-size: 26px;
          font-weight: 900;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        ul {
          li {
            margin-bottom: 5px;
            font-size: 18px;
            strong {
              font-weight: 700;
              font-size: 19px;
            }
          }
        }

        .options-btns {
          width: 100%;
          height: max-content;
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            width: 160px;
            height: 50px;
            border: none;
            margin: 0px 26px 0px 26px;
            font-size: 18px;
            font-weight: 800;
            color: #ffffff;
            border-radius: 8px;
            transition: 200ms;

            &:hover {
              scale: 1.06;
              cursor: pointer;
            }
          }
        }
      }
    }
    /*MODAISSS --------------------------------- */

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
          background-color: #ebebeb;
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

          &:hover {
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          }
        }

        .company-input {
          font-weight: 600;
          color: #000000;
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
