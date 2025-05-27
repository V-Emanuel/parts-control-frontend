import styled from 'styled-components';
import theme, { sideBarWidth } from './theme';

export const UserStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  padding-top: 80px;
  padding-left: calc(${sideBarWidth} + 70px);
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .user-card {
    min-width: 400px;
    background-color: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin-bottom: 40px;

    p {
      font-size: 22px;
      font-weight: 700;
      color: ${theme.colors.text};
      margin-bottom: 4px;
    }

    h6 {
      font-size: 15px;
      color: ${theme.colors.muted};
      margin-bottom: 20px;
    }

    h1 {
      font-size: 20px;
      color: ${theme.colors.accent};
      margin: 24px 0 12px;
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        padding: 12px 12px;
        background-color: ${theme.colors.secondary};
        border-radius: 8px;
        margin-bottom: 8px;
        color: #ffffff;
        font-size: 15px;
      }
    }
  }
`;
