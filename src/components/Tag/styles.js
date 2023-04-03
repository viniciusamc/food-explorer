import styled from "styled-components";

export const Container = styled.div`
  > h3 {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};

    padding: 6px 10px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    width: fit-content;
    border-radius: 5px;
  }
`;
