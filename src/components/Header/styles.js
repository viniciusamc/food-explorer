import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-around;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  .active #menu {
    height: 100vh;
    visibility: visible;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const Logo = styled.div`
  > img {
    width: 200px;
  }
`;

export const Nav = styled.nav`
  > button {
    background-color: transparent;
    border: none;
    padding: 10px;
  }
  @media (min-width: 768px) {
    > button {
      display: none;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: block;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  height: 0;
  padding: 36px 28px;
  top: 96px;
  right: 0px;
  z-index: 10;

  visibility: hidden;
  overflow-y: hidden;
  transition: all 0.5s ease-in-out;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Search = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 30%;
    max-width: 600px;
  }
`;

export const List = styled.li`
  display: flex;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;

export const Receipt = styled.div`
  cursor: pointer;

  > h3 {
    display: none;
  }

  > span {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: 500;
    font-size: 14px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 12px 40px;

    > span,
    h3 {
      display: block;
    }
  }
`;

export const Exit = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
