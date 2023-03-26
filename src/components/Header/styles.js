import styled from "styled-components";
import { Input } from "../Input";

export const StyledInput = styled(Input)`
  ::placeholder {
    text-align: center;
  }

  width: 500px;
`;

export const Container = styled.header`
  width: 100vw;
  max-height: 114px;

  padding: 56px 28px 24px 28px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
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
  width: 50%;
`;

export const Exit = styled.div``;

export const Cart = styled.div``;
