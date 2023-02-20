import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ $theme }) => theme.COLORS.DARK_400};
  }
`;
