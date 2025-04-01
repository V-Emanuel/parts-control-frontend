import styled from 'styled-components';
import theme from './theme';

export const HomeStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.primary};

  .table-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 300px;
    padding-top: 80px;
    padding-right: 20px;
    padding-bottom: 20px;

    .table-container {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: auto;
      border-radius: 20px;
      .dashboard-table {
        background-color: #fff;
        width: 100%;
        height: 100%;
        thead {
          tr {
            th {
              min-width: 200px;
              height: max-content;
              box-sizing: border-box;
              padding: 15px 20px 15px 20px;
              background-color: ${theme.colors.secondary};
              color: #fff;
              border: 1px solid #cacaca;
              font-size: 15px;
              font-weight: 700;
            }
          }
        }

        tbody {
          tr {
            td {
              width: max-content;
              height: max-content;
              flex-wrap: wrap;
              box-sizing: border-box;
              padding: 15px 10px 15px 10px;
              background-color: #fff;
              border: 1px solid #cacaca;
              font-size: 15px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;
