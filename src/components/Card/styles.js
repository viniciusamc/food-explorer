import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 24px;

  min-width: 210px;
  width: 90vw;
  max-width: 350px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  position: relative;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  img {
    width: 80%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  p::before {
    content: "R$";
    font-size: 16px;
    margin-right: 2px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  font-size: 18px;

  span {
    cursor: pointer;
  }
`;

export const Favorite = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  font-size: 32px;

  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  font-size: 18px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
`;
