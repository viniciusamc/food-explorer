import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;

  border-radius: 10px;
  border: 0;
  padding: 12px 24px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  :hover {
    filter: brightness(0.9);
    transition-duration: 300ms;
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    opacity: 0.7;
  }
`;
