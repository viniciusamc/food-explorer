import { Container, Logo, Cart } from "./styles";
import menuBurguer from "../../assets/icons/menu.svg";
import logo from "../../assets/svgs/explorer.svg";
import cart from "../../assets/icons/receipt.svg";

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

      <Input placeholder="Prato" type="text" />

      <Cart>
        <img src={cart} />
      </Cart>
    </Container>
  );
}
