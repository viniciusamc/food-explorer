import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 14px;
    font-weight: 400;
  }
`;
