import { Container, Logo, Form, Content } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Form>
        <h1>Faça login</h1>

        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" />

        <Input placeholder="No mínimo 6 caracteres" label="Senha" />

        <Button text={"Criar conta"} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
