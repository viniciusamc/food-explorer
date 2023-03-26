import { Container, Logo, Cart } from "./styles";
import menuBurguer from "../../assets/icons/menu.svg";
import logo from "../../assets/svgs/explorer.svg";
import cart from "../../assets/icons/receipt.svg";
import { Button } from "../Button";

import { api } from "../../services/api";

import { useState } from "react";

export function Header() {
  // const [isActive, setActive] = useState(false);

  // const handleToggleMenu = () => {
  //   setActive(!isActive);
  // };

  const quantityItensCart = `${api.defaults.baseURL}/cart/2`;

  return (
    <Container>
      <button>
        <img src={menuBurguer} />
      </button>

      <Logo>
        <img src={logo} />
        <h1>food explorer</h1>
      </Logo>

      <Cart>
        <img src={cart} />
      </Cart>
    </Container>
  );
}
