import styled from 'styled-components';
import theme from './theme';

export const TableWrapper = styled.div`
  background-color: ${theme.colors.primary};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px 20px 20px 0px;
  margin: 0px;

  .gridjs-table {
    width: 100%;
  }
`;
