import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 472px;
  padding: 24px;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  position: relative;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  @media (max-width: 360px) {
    width: 100%;
  }

  @media (min-width: 560px) {
    max-width: 350px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 12px;

  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 0.875rem;
    font-weight: medium;
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1rem;
  }

  > h3 {
    display: none;
  }

  @media (min-width: 900px) {
    > h2 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 2rem;
    }

    > h3 {
      display: -webkit-box;

      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 0.875rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  font-size: 22px;

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
  width: fit-content;
  padding-inline: 40px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  margin-bottom: 24px;
`;

export const Img = styled.img`
  width: 70%;
`;
