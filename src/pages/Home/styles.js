import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80vw;
  max-width: 1250px;
  > h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 20px;
  }
`;

export const Banner = styled.div`
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  width: 90vw;
  height: 30vh;
  padding: 20px;
  margin: 30px auto;
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    display: block;
    min-width: 191px;
    width: 55%;
    max-width: 550px;
  }

  > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  h1,
  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    word-wrap: break-word;
  }

  h1 {
    font-size: 1.125rem;
  }
  h3 {
    font-size: 0.75rem;
  }

  @media (min-width: 428px) {
    flex-direction: row;

    > img {
      transform: translateX(-20%);
    }

    > div {
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin: 0 auto;
  margin-bottom: 20px;
`;
