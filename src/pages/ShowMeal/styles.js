import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 32px;

  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > p {
    word-wrap: break-word;
  }
`;

export const Tags = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 100px);
  gap: 8px;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 1.5rem;

  > svg {
    cursor: pointer;
  }
`;
