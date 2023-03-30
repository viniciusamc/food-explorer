import { Container, Logo, Form, Content, Link } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logo from "../../assets/logo.svg";

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Form>
        <h1>Crie sua Conta</h1>
        <Content>
          <label>Seu nome</label>
          <Input placeholder="Exemplo: Maria da Silva"></Input>
        </Content>

        <Content>
          <label>Email</label>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
        </Content>

        <Content>
          <label>Senha</label>
          <Input placeholder="No mínimo 6 caracteres" />
        </Content>

        <Button text={"Entrar"} />

        <Link>Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
