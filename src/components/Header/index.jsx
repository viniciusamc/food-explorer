import { Container, Logo, Cart, StyledInput, Search, Exit } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import menuBurguer from "../../assets/icons/menu.svg";
import logo from "../../assets/svgs/explorer.svg";
import cart from "../../assets/icons/receipt.svg";
import exit from "../../assets/icons/exit.svg";

import { Button } from "../Button";
import { Input } from "../Input";

import { useState, useEffect } from "react";

export function Header() {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth > 950);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <Button
          text={<img src={cart} />}
          altText={`${screen ? "Pedidos (0)" : ""}`}
        ></Button>
      </Cart>

      <Exit>
        <img src={exit} />
      </Exit>
    </Container>
  );
}
