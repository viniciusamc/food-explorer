import styled from "styled-components";

export const Container = styled.textarea`
  /* width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 16px;
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  > label {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > textarea {
    width: 100%;
    height: 150px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    resize: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 16px;
    }
  }
`;
