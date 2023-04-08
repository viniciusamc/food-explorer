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
  max-width: 216px;

  @media (max-width: 950px) {
    background-color: transparent;
    width: fit-content;
    padding: 0;
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
  align-items: center;
  justify-content: center;
  gap: 8px;

  > img {
    width: 20vw;
    max-width: 200px;
    min-width: 140px;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }

  @media (min-width: 950px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
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
