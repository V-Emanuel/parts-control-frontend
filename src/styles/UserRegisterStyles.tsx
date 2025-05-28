import styled from 'styled-components';
import theme, { sideBarWidth } from './theme';

export const UserRegisterStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .form-content {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 100px;
    padding-left: ${sideBarWidth};
    padding-bottom: 60px;
    background-color: ${theme.colors.primary};
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 30px;
      font-weight: 800;
      color: ${theme.colors.secondary};
      margin-bottom: 20px;
      letter-spacing: 0.7px;
    }

    form.order-form {
      width: 460px;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      background: #fff;
      padding: 20px 28px;
      border-radius: 10px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

      .input-container {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;

        label {
          font-weight: 600;
          font-size: 15px;
          color: ${theme.colors.secondary};
          margin-bottom: 5px;
          user-select: none;

          strong {
            color: #e63946;
          }
        }

        input[type='text'],
        input[type='email'],
        input[type='password'] {
          height: 30px;
          padding: 6px 9px;
          border: 1.5px solid #ddd;
          border-radius: 8px;
          font-size: 0.85rem;
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;

          &:focus {
            border-color: ${theme.colors.secondary};
            box-shadow: 0 0 6px rgba(80, 115, 235, 0.3);
            outline: none;
          }

          &::placeholder {
            color: #a8a8a8;
            font-weight: 400;
          }
        }

        &.checkbox-group {
          flex-direction: column;
          box-sizing: border-box;
          padding: 10px 8px;
          background-color: #f5f7fa;
          border-radius: 8px;
          border: 1px solid #ddd;

          .label-title {
            font-size: 15px;
            margin-bottom: 10px;
          }

          .label-option {
            font-size: 14px;
            margin-left: 5px;
          }

          label {
            cursor: pointer;
            font-weight: 600;
            color: #333;
            display: flex;
            align-items: center;
            gap: 5px;
            user-select: none;

            input[type='checkbox'] {
              width: 14px;
              height: 14px;
              cursor: pointer;
              accent-color: ${theme.colors.secondary};
              border-radius: 4px;
            }

            input[type='checkbox']:disabled {
              cursor: not-allowed;
              accent-color: #ccc;
            }
          }
        }

        &.checkbox-single {
          flex-direction: row;
          align-items: center;
          gap: 5px;

          label {
            font-weight: 600;
            font-size: 0.85rem;
            color: #333;
            user-select: none;
            cursor: pointer;

            input[type='checkbox'] {
              width: 16px;
              height: 16px;
              cursor: pointer;
              accent-color: ${theme.colors.secondary};
              border-radius: 4px;
            }
          }
        }
      }

      .btn-container {
        flex: 1 1 100%;
        display: flex;
        justify-content: center;

        button {
          width: 130px;
          height: 40px;
          border: none;
          background-color: ${theme.colors.secondary};
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(80, 115, 235, 0.4);
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease;
          cursor: pointer;

          &:hover:not(:disabled) {
            background-color: #5879e7;
            box-shadow: 0 6px 16px rgba(80, 115, 235, 0.6);
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }
    }

    .modal-display {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.48);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1100;

      .modal-content {
        background: #fff;
        padding: 20px 34px;
        border-radius: 14px;
        width: 380px;
        max-width: 90%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        color: ${theme.colors.secondary};
        text-align: center;

        p {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        ul {
          text-align: left;
          max-height: 210px;
          overflow-y: auto;
          margin-bottom: 22px;
          padding-left: 16px;

          li {
            margin-bottom: 8px;
            font-size: 0.95rem;
            line-height: 1.3;

            strong {
              font-weight: 700;
            }
          }
        }

        .options-btns {
          display: flex;
          justify-content: center;
          gap: 20px;

          button {
            width: 110px;
            height: 38px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.9rem;
            border: none;
            color: #fff;
            transition: filter 0.3s ease;

            &:hover:not(:disabled) {
              filter: brightness(0.9);
              cursor: pointer;
            }

            &:disabled {
              cursor: not-allowed;
              opacity: 0.6;
            }
          }

          button:first-child {
            background-color: #5ab98d;
          }

          button:last-child {
            background-color: #fe5455;
          }
        }
      }
    }
  }
`;
