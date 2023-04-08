import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};

  margin-bottom: 73px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 32px;

  width: 80vw;
  max-width: 500px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > h1 {
    display: none;
  }

  @media (min-width: 900px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 16px;
    padding: 64px;
    margin: 0 0;

    > h1 {
      display: block;
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-weight: 500;
      font-size: 32px;
      text-align: center;
    }
  }

  > a {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-weight: 500;

  text-align: center;
`;
