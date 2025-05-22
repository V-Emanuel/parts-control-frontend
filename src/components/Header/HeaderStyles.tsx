import styled from 'styled-components';
import { sideBarWidth } from '../../styles/theme';

export const HeaderStyles = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: calc(${sideBarWidth} + 50px);
  position: fixed;
  top: 0px;
  z-index: 99;

  p {
    font-size: 22px;
    font-weight: 600;
    color: #000;
  }

  .company-select {
    position: absolute;
    right: 90px;
    width: 120px;
    height: 26px;
    padding: 4px 30px 4px 8px;
    border-radius: 4px;
    border: none;
    background-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(141, 141, 141, 0.2);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='16' viewBox='0 0 20 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    cursor: pointer;
    font-weight: 600;
    color: #646464;

    &:focus {
      outline: none;
      border: 1px solid #389fff;
      box-shadow: 0 0 0 2px rgba(141, 141, 141, 0.2);
      transition: 200ms;

      option {
        background-color: #ffffff;
        color: #333;
        padding: 8px;
        font-size: 13px;
        font-weight: 600;
        color: #777777;
      }
    }
  }

  .new-register {
    position: absolute;
    right: 18px;

    :nth-child(1) {
      font-size: 38px;
      color: #5ab98d;
      transition: 200ms;
      &:hover {
        scale: 1.02;
        color: #4c9e78;
      }
    }
  }
`;
