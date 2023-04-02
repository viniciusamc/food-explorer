import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Content = styled.div`
  width: 85vw;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 24px;
  cursor: pointer;

  ::after {
    content: "Voltar";
    font-size: 24px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: bold;
  }

  :hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    transition-duration: 300ms;

    ::after {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      transition-duration: 300ms;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.div``;

export const Col = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    gap: 32px;
  }
`;
