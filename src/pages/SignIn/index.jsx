import { Container, Logo, Form, Content } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Form>
        <h1>Faça login</h1>
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
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text={"Entrar"} onClick={handleSignIn} />
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
