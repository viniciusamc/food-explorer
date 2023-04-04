import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin-top: 32px;

  > img {
    width: 120px;

    @media (min-width: 530px) {
      width: 180px;
    }
  }

  > h3 {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-weight: 400;
    text-align: center;

    @media (min-width: 530px) {
      font-size: 14px;
    }
  }
`;
