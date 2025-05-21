import styled from 'styled-components';
import theme, { sideBarWidth } from '../../styles/theme';

export const SideBarStyles = styled.header`
  min-width: ${sideBarWidth};
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
    margin-top: 20px;
    background-color: transparent;
    .option {
      width: 100%;
      height: max-content;
      display: flex;
      box-sizing: border-box;
      padding: 12px 20px 12px 20px;
      margin-bottom: 4px;
      text-decoration: none;
      transition: 300ms;
      position: relative;
      align-items: center;

      :nth-child(1) {
        color: #cfcfcf;
        margin-right: 10px;
        font-size: 17px;
      }

      h1 {
        color: #cfcfcf;
        font-size: 13px;
        font-weight: 700;
      }

      .left-div {
        width: 4px;
        height: 100%;
        background-color: transparent;
        position: absolute;
        left: 0px;
        top: 0px;
      }

      &:hover {
        background-color: #081946;
      }
    }

    .active {
      background: linear-gradient(
        to right,
        rgba(71, 139, 240, 0.3),
        transparent
      );
      :nth-child(1),
      h1 {
        color: #fff;
      }

      .left-div {
        background-color: #3d76df;
      }
    }

    .admin-division {
      padding-left: 20px;
      margin-top: 30px;
      margin-bottom: 20px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
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
      font-weight: 500;
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
