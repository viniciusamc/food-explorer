import {
  Container,
  Logo,
  Nav,
  Ul,
  List,
  Receipt,
  Search,
  Exit,
} from "./styles";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

import logo from "../../assets/logo.svg";
import receipt from "../../assets/icons/receipt.svg";
import exit from "../../assets/icons/exit.svg";
import menu from "../../assets/icons/menu.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
import { api } from "../../services/api";

export function Header({ search }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const [cartCount, setCartCount] = useState(0);

  function handleMenu() {
    document.querySelector("#nav").classList.toggle("active");
  }

  function handleLogout() {
    signOut();
    navigate("/");
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
      <Nav id="nav">
        <button id="btn-mobile" onClick={handleMenu}>
          <img src={menu} alt="Menu" />
        </button>
        <Ul id="menu">
          <Input
            icon={AiOutlineSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
          {user.role === "admin" ? (
            <List
              style={{ marginTop: "36px" }}
              onClick={() => navigate("/addmeal")}
            >
              Novo Prato
            </List>
          ) : (
            <></>
          )}

          <List onClick={handleLogout}>Sair</List>
        </Ul>
      </Nav>

      <Logo>
        <img src={logo} alt="Food Explorer" onClick={() => navigate("/")} />
      </Logo>

      <Search>
        <Input
          icon={AiOutlineSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </Search>

      <Receipt>
        {user.role === "admin" ? (
          <>
            <h3 onClick={() => navigate("/addmeal")}>Novo prato</h3>
          </>
        ) : (
          <>
            <img src={receipt} alt="Carrinho" />
            <span>Pedidos ({cartCount})</span>
          </>
        )}
        {/* 
        <div>
          {user.role === "admin" ? (
            <Button text={"Novo Prato"} onClick={() => navigate("/addmeal")} />
          ) : (
            <Button text={``} />
          )}
        </div> */}
      </Receipt>

      <Exit onClick={handleLogout}>
        <img src={exit} />
      </Exit>
    </Container>
  );
}
