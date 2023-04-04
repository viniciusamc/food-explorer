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
  background: none;
  transform: rotate(180deg);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
`;
