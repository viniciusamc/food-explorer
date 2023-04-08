import {
  Container,
  Logo,
  StyledInput,
  Search,
  Exit,
  StyledHeader,
} from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import menuBurguer from "../../assets/icons/menu.svg";
import logo from "../../assets/svgs/explorer.svg";
import cart from "../../assets/icons/receipt.svg";
import exit from "../../assets/icons/exit.svg";
import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";

export function Header() {
  const [screen, setScreen] = useState(false);
  const { signOut } = useAuth();

  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth > 950);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleLogout() {
    signOut();
  }

  return (
    <Container>
      <button>
        <img src={menuBurguer} />
      </button>

      <Logo>
        <img src={logo} />
        <h1>food explorer</h1>
        <span>admin</span>
      </Logo>

      <Search>
        <StyledInput
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          icon={AiOutlineSearch}
        />
      </Search>

      <StyledHeader
        text={<img src={cart} />}
        altText={`${screen ? "Pedidos (0)" : ""}`}
      />

      <Exit onClick={handleLogout}>
        <img src={exit} />
      </Exit>
    </Container>
  );
}
