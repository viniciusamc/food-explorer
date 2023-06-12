import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
    font-size: 20px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 20px;
    cursor: pointer;
  }

  > input {
    padding: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 16px;
    }
  }
`;
