import { Container, Logo, Form, Content } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { api } from "../../services/api";

import logo from "../../assets/logo.svg";

export function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then((response) => {
        alert("Conta criada com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao criar conta");
        }
      });
  }

  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Form>
        <h1>Crie sua Conta</h1>
        <Input
          placeholder="Exemplo: Maria da Silva"
          label="Seu nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text={"Criar conta"} onClick={handleSignUp} />

        <h1>Já tenho uma conta</h1>
      </Form>
    </Container>
  );
}
