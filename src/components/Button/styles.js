import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 10px;
  padding: 12px 24px;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
    opacity: 0.7;
  }
`;
