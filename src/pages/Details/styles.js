import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 32px;
  margin-left: 10vw;

  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  gap: 24px;
  margin-top: 32px;

  > img {
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > p {
    word-wrap: break-word;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    width: 32%;

    > h1 {
      font-size: 2.5rem;
    }

    > p {
      text-align: left;
      font-size: 1.5rem;
    }
  }
`;

export const Tags = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 100px);
  gap: 8px;

  @media (min-width: 1024px) {
    display: flex;
    gap: 12px;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 1.5rem;

  > svg {
    cursor: pointer;
  }
`;
