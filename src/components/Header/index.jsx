import { Container, Logo, Cart, StyledInput, Search, Exit } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import menuBurguer from "../../assets/icons/menu.svg";
import logo from "../../assets/svgs/explorer.svg";
import cart from "../../assets/icons/receipt.svg";
import exit from "../../assets/icons/exit.svg";

import { Button } from "../Button";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <button>
        <img src={menuBurguer} />
      </button>

      <Logo>
        <img src={logo} />
        <h1>food explorer</h1>
      </Logo>

      <Search>
        <StyledInput
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          icon={AiOutlineSearch}
        />
      </Search>

      <Cart>
        <img src={cart} />
      </Cart>

      <Exit>
        <img src={exit} />
      </Exit>
    </Container>
  );
}
