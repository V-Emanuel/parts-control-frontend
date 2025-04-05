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
      border-radius: 10px;
      .dashboard-table {
        background-color: #fff;
        width: 100%;
        height: 100%;
        thead {
          tr {
            th {
              min-width: 250px;
              height: max-content;
              box-sizing: border-box;
              padding: 15px 20px 15px 20px;
              background-color: ${theme.colors.secondary};
              color: #fff;
              border: 1px solid #cacaca;
              font-size: 14px;
              font-weight: 700;
            }
          }
        }

        tbody {
          tr {
            background-color: #fff;
            transition: 200ms;
            td {
              width: 200px;
              height: max-content;
              flex-wrap: wrap;
              box-sizing: border-box;
              padding: 15px 10px 15px 10px;
              background-color: transparent;
              border: 1px solid #cacaca;
              font-size: 13px;
              font-weight: 500;
            }

            &:hover {
              background: rgba(0, 0, 0, 0.08);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
