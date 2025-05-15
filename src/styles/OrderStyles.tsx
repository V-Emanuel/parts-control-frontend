import styled from 'styled-components';
import theme from './theme';

export const OrderStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: ${theme.colors.primary}; */
  background-color: #e9e9e9;

  .order-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 280px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .order-title {
      width: 98%;
      height: max-content;
      height: max-content;
      display: flex;
      margin-bottom: 3px;
      h1,
      button {
        height: 46px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        color: #ffffff;
        font-size: 17px;
        font-weight: 800;
      }

      h1 {
        width: 100%;
        box-sizing: border-box;
        padding-left: 17px;
      }
      .update-data-btn {
        background-color: #ee9b57;
      }
      button {
        width: 150px;
        justify-content: center;
        border: none;
        margin-left: 3px;
        border: 1px solid transparent;
        background-color: #5ab98d;
        transition: 300ms;
        &:hover {
          cursor: pointer;
          background-color: #ffffff;
          color: #5ab98d;
          border-color: #5ab98d;
        }
      }
    }

    .order-data {
      width: 98%;
      height: max-content;
      box-sizing: border-box;
      padding: 17px;
      border-radius: 8px;
      background-color: #ffffff;
      margin-bottom: 20px;

      .order-card {
        p {
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 6px;
          color: ${theme.colors.secondary};
          strong {
            font-weight: 600;
            font-size: 15px;
            margin-right: 3px;
          }
        }
      }
    }
  }
`;
