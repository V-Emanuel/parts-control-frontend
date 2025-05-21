import styled from 'styled-components';
import theme, { sideBarWidth } from './theme';

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
    padding-left: calc(${sideBarWidth});
    padding-top: 106px;
    padding-right: 4px;
    padding-bottom: 4px;

    .sub-options {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: fixed;
      top: 50px;
      box-sizing: border-box;
      padding-right: calc(${sideBarWidth} + 4px);
      background-color: #fff;
      border-top-width: 2px;
      border-bottom-width: 2px;
      border-style: solid;
      border-color: #8d8d8d;

      .table-option {
        width: max-content;
        height: max-content;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 700;
        color: #535353;
        padding: 7px 22px 7px 22px;
        border: none;
        background-color: #fff;
        transition: 300ms;

        &:hover {
          cursor: pointer;
          background-color: #dadada;
        }
      }

      .active-option {
        background-color: #8d8d8d;
        color: #ffffff;
      }
    }

    .table-container {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: auto;
      border-radius: 10px;
      margin-left: 4px;
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
              padding: 12px 20px 12px 20px;
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
              font-size: 14px;
              font-weight: 600;
              color: #4b4b4b;
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
