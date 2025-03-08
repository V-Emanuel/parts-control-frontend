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
    padding-top: 70px;
    flex-wrap: wrap;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    position: relative;
    margin-bottom: 30px;

    .table-options {
      width: 100%;
      height: 60px;
      background-color: #eff3f6;
      box-sizing: border-box;
      padding-left: 150px;
      margin: 0px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: fixed;
      top: 0px;
      z-index: 999;
      background-color: transparent;

      .sub-divisions {
        width: 100%;
        height: 40px;
        background-color: #eff3f6;
        display: flex;

        .sub {
          width: max-content;
          height: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 0px 20px 0px 20px;
          background-color: transparent;
          border-radius: 8px;
          background-color: #ffffff;
          transition: 300ms;
          color: #000;
          margin-right: 20px;
          font-size: 14px;

          &:hover {
            border-top-left-radius: 10px;
            background-color: ${theme.colors.fourt};
            color: #ffffff;
            cursor: pointer;
          }

          &.active {
            border-top-left-radius: 10px;
            background-color: ${theme.colors.fourt};
            color: #ffffff;
          }
        }
      }
    }
  }

  .gridjs-container {
    font-family: Arial, sans-serif;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
    height: 80%;
  }

  .gridjs-table {
    border-collapse: collapse;
    width: max-content;
  }

  .gridjs-th {
    background: ${theme.colors.secondary};
    box-sizing: border-box;
    padding: 12px 14px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    white-space: nowrap;
    min-width: 150px;
    height: 20px;

    &:hover {
      background-color: ${theme.colors.fourt};
    }
  }

  .gridjs-td {
    box-sizing: border-box;
    padding: 10px 14px;
  }

  .gridjs-tr:nth-child(odd) {
    font-size: 14px;
  }

  .gridjs-tr:nth-child(even) {
    font-size: 14px;
  }
`;
