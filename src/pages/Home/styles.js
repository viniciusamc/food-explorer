import styled from "styled-components";

export const Section = styled.div``;

export const Banner = styled.div`
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  width: 90vw;
  height: 260px;
  max-width: 1200px;
  margin: 160px auto;
  border-radius: 3px;
  position: relative;
  display: grid;
  justify-content: end;

  > img {
    position: absolute;
    min-width: 191px;
    width: 55%;
    left: -100px;
    bottom: calc(50% - 145px);
  }

  > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;
