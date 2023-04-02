import { Container, Logo, Form, Content, Link } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logo from "../../assets/logo.svg";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Form>
        <h1>Crie sua Conta</h1>
        <Input placeholder="Exemplo: Maria da Silva" label="Seu nome" />

        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" />

        <Input placeholder="No mínimo 6 caracteres" label="Senha" />

        <Button text={"Criar conta"} />

        <Link>Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
