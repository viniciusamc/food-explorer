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
import logo from "../../assets/logo.svg";
import cart from "../../assets/icons/receipt.svg";
import exit from "../../assets/icons/exit.svg";

import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function Header() {
  const [screen, setScreen] = useState(false);
  const { signOut, user } = useAuth();
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (user.role === "user") {
      api
        .get(`/cart/${user.id}`)
        .then((response) => {
          setCartCount(response.data.cartCount);
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Erro ao buscar favoritos");
          }
        });
    }
  }, [user]);

  return (
    <Container>
      <button>
        <img src={menuBurguer} />
      </button>

      <Link to="/">
        <Logo>
          <img src={logo} />
          {user.role === "admin" ? <span>admin</span> : <span></span>}
        </Logo>
      </Link>

      <Search>
        <StyledInput
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          icon={AiOutlineSearch}
        />
      </Search>

      {user.role === "admin" ? (
        <StyledHeader
          altText={`${screen ? "Novo Prato" : ""}`}
          onClick={() => navigate("/addmeal")}
        />
      ) : (
        <StyledHeader
          text={<img src={cart} />}
          altText={`${screen ? `Pedidos (${cartCount})` : ""}`}
        />
      )}

      <Exit onClick={handleLogout}>
        <img src={exit} />
      </Exit>
    </Container>
  );
}
