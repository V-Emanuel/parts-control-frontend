import styled from 'styled-components';

export const HomeStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .table-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 300px;
    flex-wrap: wrap;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    position: relative;

    .table-options {
      width: 100%;
      height: 16%;
      background-color: #eff3f6;
      box-sizing: border-box;
      margin: 0px;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      .sub-divisions {
        width: 100%;
        height: 50px;
        background-color: #eff3f6;
        display: flex;
        box-sizing: border-box;
        padding-left: 20px;

        .sub {
          width: max-content;
          height: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 0px 30px 0px 30px;
          background-color: transparent;
          border-top-right-radius: 0px;
          border-top-left-radius: 0px;
          /* border-top: 2px solid transparent;
            border-left: 2px solid transparent;
            border-right: 2px solid transparent;
            border-bottom: 2px solid #acacac; */
          background-color: #eff3f6;

          &:hover {
            /* border-top: 2px solid #acacac;
              border-left: 2px solid #acacac;
              border-right: 2px solid #acacac;
              border-bottom: 2px solid transparent; */
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            background-color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }

  .gridjs-container {
    font-family: Arial, sans-serif;
  }

  .gridjs-table {
    border-collapse: collapse;
    width: max-content;
  }

  .gridjs-th {
    background: #4caf50;
    color: white;
    font-weight: bold;
    white-space: nowrap;
    min-width: 180px;
  }

  .gridjs-tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
