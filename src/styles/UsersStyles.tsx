import styled from 'styled-components';
import { sideBarWidth } from './theme';

export const UserStyles = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: calc(${sideBarWidth} + 60px);
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 10px;
  color: #000000;

  .users-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* ou 'center' se quiser centralizado */
    margin: 40px 0 24px;

    p {
      font-size: 28px;
      font-weight: 700;
      color: #1e1e1e;
      margin: 0 0 8px;
      position: relative;
      letter-spacing: 0.5px;
    }

    .underline {
      width: 60px;
      height: 4px;
      border-radius: 4px;
      background: linear-gradient(90deg, #007cf0, #00dfd8);
      animation: slide-in 1s ease-out forwards;
      opacity: 0;
    }

    @keyframes slide-in {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 60px;
        opacity: 1;
      }
    }
  }

  .users-list {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    transition: background-color 0.3s ease;

    .user-div.inactive {
      background-color: #e0e0e0;
    }

    .user-div {
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
      transition: all 0.3s ease;
      width: 100%;
      max-width: 420px;
      color: #121212;
      margin: 16px auto;
      text-decoration: none;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      }

      .user-name {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 4px;
        color: #1e1e1e;
      }

      .user-email {
        font-size: 15px;
        font-weight: 500;
        color: #6b6b6b;
        margin-bottom: 14px;
      }

      .user-admin {
        background-color: #ffecec;
        color: #d12b2b;
        font-weight: 600;
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .info-block {
        margin-bottom: 14px;

        h3 {
          font-size: 15px;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag {
          background-color: #f2f2f2;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 13px;
          color: #444;
          font-weight: 500;
          transition: background-color 0.3s;

          &:hover {
            background-color: #e0e0e0;
          }
        }
      }

      @media (max-width: 500px) {
        padding: 16px;
        .user-name {
          font-size: 18px;
        }
        .user-email {
          font-size: 14px;
        }
        .tag {
          font-size: 12px;
        }
      }
    }
  }
`;
