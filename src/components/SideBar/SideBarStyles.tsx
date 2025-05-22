import styled from 'styled-components';

export const SideBarStyles = styled.aside`
  min-width: 250px;
  height: 100vh;
  background: linear-gradient(180deg, #0f172a, #1e293b);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 20px 0;
  box-sizing: border-box;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  gap: 24px;

  .box-title {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    width: 100%;
    padding-left: 6px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #334155;
  }

  .options {
    display: flex;
    flex-direction: column;
    width: 100%;

    .option {
      display: flex;
      align-items: center;
      padding: 10px 16px;
      border-radius: 8px;
      color: #cbd5e1;
      font-size: 14px;
      font-weight: 500;
      gap: 10px;
      text-decoration: none;
      position: relative;
      transition:
        background 0.2s ease,
        transform 0.1s ease;

      svg {
        font-size: 18px;
      }

      h1 {
        font-size: 14px;
        font-weight: 600;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        transform: translateX(4px);
        color: #ffffff;

        h1 {
          color: #ffffff;
        }

        svg {
          color: #ffffff;
        }
      }

      &.active {
        background-color: #1e40af;
        color: #ffffff;

        h1 {
          color: #ffffff;
        }

        svg {
          color: #ffffff;
        }
      }
    }

    .admin-division {
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      color: #38bdf8;
      margin: 24px 0 8px;
      padding-left: 6px;
    }
  }

  .logout-btn {
    display: flex;
    align-items: center;
    background-color: #facc15;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    color: #1e293b;
    font-weight: 600;
    font-size: 14px;
    position: absolute;
    bottom: 30px;
    left: 20px;
    transition: 0.2s ease;
    gap: 8px;

    svg {
      font-size: 18px;
    }

    h6 {
      margin: 0;
    }

    &:hover {
      background-color: #fde047;
      transform: scale(1.03);
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    min-width: 220px;
    .box-title {
      font-size: 16px;
    }
    .option {
      h1 {
        font-size: 13px;
      }
    }
  }
`;
