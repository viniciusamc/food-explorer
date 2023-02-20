import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;

  > p {
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
