import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&family=Roboto:wght@300;400;500;700;900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ $theme }) => theme.COLORS.DARK_400};
    margin-bottom: 80px;
  }
`;
