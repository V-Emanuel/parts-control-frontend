import styled from 'styled-components';
import theme from './theme';

export const OrderStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.primary};

  .order-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 300px;
    padding-top: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .order-data {
      width: 98%;
      height: max-content;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 8px;
      background-color: #ffffff;

      .order-card {
        p {
          font-size: 15px;
          font-weight: 400;
          margin-bottom: 8px;
          color: ${theme.colors.secondary};
          strong {
            font-weight: 600;
            font-size: 16px;
            margin-right: 3px;
          }
        }
      }
    }
  }
`;
