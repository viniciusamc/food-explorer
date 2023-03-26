import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 24px;

  width: fit-content;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  position: relative;
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

  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 24px;
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
`;

export const Favorite = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  font-size: 32px;
`;
