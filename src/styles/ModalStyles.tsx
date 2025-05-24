import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 16px;
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #444;
`;

export const ModalInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    border-color: #2196f3;
    outline: none;
  }
`;

export const ModalSelect = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    border-color: #2196f3;
    outline: none;
  }
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const ModalButton = styled.button<{ variant?: 'cancel' | 'submit' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'cancel'
      ? `
    background-color: #ccc;
    color: #333;
    &:hover {
      background-color: #bbb;
    }
  `
      : `
    background-color: #2196f3;
    color: white;
    &:hover {
      background-color: #1976d2;
    }
  `}
`;
