import styled from "styled-components";

import { IMaskInput } from "react-imask";

export const MaskedInput = styled(IMaskInput)`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 10px;
  margin-bottom: 8px;

  height: 48px;
  padding: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 20px;
  }

  border: 0;
`;

export const Container = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Content = styled.div`
  width: 85vw;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 24px;
  cursor: pointer;

  ::after {
    content: "Voltar";
    font-size: 24px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: bold;
  }

  :hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    transition-duration: 300ms;

    ::after {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      transition-duration: 300ms;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }
`;

export const Select = styled.select`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 10px;

  height: 48px;
  padding: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 20px;
  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 20px;
  }
  border: 0;
`;

export const Section = styled.div`
  width: 100%;
`;

export const IngredientsList = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  height: 48px;
  padding: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 8px;

  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.DARK_700};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 8px;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 8px;

  @media (min-width: 1024px) {
    width: 200%;
  }
`;
