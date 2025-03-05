import styled from 'styled-components';

export const HomeStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .table-content {
    width: max-content;
    height: 100%;
    background-color: red;
    box-sizing: border-box;
    padding-left: 300px;
    flex: 1;
    /* padding: 20px; */
    flex-wrap: wrap;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  .gridjs-container {
    font-family: Arial, sans-serif;
  }

  .gridjs-table {
    border-collapse: collapse;
    width: 100%;
  }

  .gridjs-th {
    background: #4caf50;
    color: white;
    font-weight: bold;
    white-space: nowrap; /* Impede que o texto quebre */
    min-width: 180px; /* Ajuste conforme necessário */
  }

  .gridjs-tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
