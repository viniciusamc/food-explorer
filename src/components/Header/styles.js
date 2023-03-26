import styled from "styled-components";
import { Input } from "../Input";
import { Button } from "../Button";

export const StyledInput = styled(Input)`
  ::placeholder {
    text-align: center;
  }

  width: 500px;
`;

export const StyledHeader = styled(Button)`
  @media (max-width: 950px) {
    background-color: transparent;
  }
`;

export const Container = styled.header`
  width: 100vw;
  max-height: 114px;

  padding: 56px 28px 24px 28px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 950px) {
    justify-content: space-between;
  }

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 950px) {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 10px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 24px;
  }
`;

export const Search = styled.div`
  width: 40%;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Exit = styled.div`
  cursor: pointer;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Cart = styled.div``;
