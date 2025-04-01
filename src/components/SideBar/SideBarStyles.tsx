import styled from 'styled-components';
import theme from '../../styles/theme';

export const SideBarStyles = styled.header`
  min-width: 280px;
  height: 100%;
  background-color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 30px;
  color: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;

  .box-title {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }

  .line {
    margin-top: 5px;
    width: 50px;
    height: 1px;
    background-color: #fff;
    margin-bottom: 50px;
  }

  .options {
    width: 100%;
    box-sizing: border-box;
    padding-left: 26px;
    margin-top: 20px;
    background-color: transparent;
    .option {
      width: 100%;
      height: max-content;
      display: flex;
      box-sizing: border-box;
      padding: 12px 20px 12px 20px;
      margin-bottom: 20px;
      text-decoration: none;

      :nth-child(1) {
        color: #fff;
        margin-right: 10px;
        font-size: 16px;
      }

      h1 {
        color: #fff;
        font-size: 14px;
      }
    }

    .active {
      background-color: #fff;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      background-color: ${theme.colors.primary};
      :nth-child(1),
      h1 {
        color: ${theme.colors.secondary};
      }
    }
  }

  .logout-btn {
    display: flex;
    background-color: transparent;
    position: absolute;
    border: none;
    bottom: 50px;
    width: max-content;
    height: max-content;
    box-sizing: border-box;
    padding: 12px 2px 2px 2px;
    border-width: 0px;
    border-bottom-width: 1px;
    border-color: transparent;
    border-style: solid;
    transition: 200ms;

    :nth-child(1) {
      font-size: 18px;
      color: #e6b33d;
    }

    h6 {
      font-size: 16px;
      color: #e6b33d;
      margin-left: 6px;
    }

    &:hover {
      scale: 1.02;
      cursor: pointer;
      border-color: #e6b33d;
    }
  }
`;
