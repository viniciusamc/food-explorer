import styled from "styled-components";

export const Container = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  /* border-radius: 99px; */
  /* padding: 8px; */
  background: none;
  transform: rotate(180deg);
  /* background-color: ${({ theme }) => theme.COLORS.DARK_200}; */
`;
