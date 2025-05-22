import styled from 'styled-components';
import theme, { sideBarWidth } from './theme';

export const HomeStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.primary};

  .table-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: calc(${sideBarWidth} + 35px);
    padding-top: 106px;
    padding-right: 4px;
    padding-bottom: 4px;

    .sub-options {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      position: fixed;
      top: 50px;
      background-color: ${theme.colors.primary};
      border-bottom: 1px solid #e5e7eb;
      z-index: 98;
      overflow-x: auto;

      .table-option {
        padding: 6px 16px;
        font-size: 14px;
        font-weight: 600;
        background-color: transparent;
        border: none;
        border-radius: 6px;
        color: #4b5563;
        transition: all 0.2s ease;
        white-space: nowrap;

        &:hover {
          background-color: #f3f4f6;
          color: #111827;
          cursor: pointer;
        }
      }

      .active-option {
        background-color: #10b981;
        color: #fff;
        font-weight: 700;
        box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
      }
    }

    @media (max-width: 768px) {
      .sub-options {
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 10px 16px;
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
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        background-color: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        thead {
          background-color: ${theme.colors.secondary};

          tr {
            th {
              min-width: 180px;
              padding: 14px 16px;
              font-size: 14px;
              font-weight: 700;
              color: #ffffff;
              text-align: left;
              border-bottom: 2px solid #ddd;
              position: sticky;
              top: 0;
              z-index: 2;
            }
          }
        }

        tbody {
          tr {
            transition: background-color 0.2s ease;
            border-bottom: 1px solid #e0e0e0;

            &:hover {
              background-color: #f5f7fa;
            }

            td {
              padding: 12px 16px;
              font-size: 14px;
              color: #333;
              vertical-align: top;
              border-right: 1px solid #f0f0f0;

              &:last-child {
                border-right: none;
              }
            }

            &.highlight-yellow {
              background-color: #fffacc;

              td {
                color: #333;
              }
            }

            &.highlight-red {
              background-color: #fe5455;

              td {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
