import { Container, Logo, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
// import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Logo></Logo>
      <Form>
        <label>Email</label>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
        <label>Senha</label>
        <Input placeholder="No mínimo 6 caracteres" />

        <Button text={"Entrar"} />

        {/* <Link to="#">Não tem uma conta? Cadastre-se</Link> */}
      </Form>
    </Container>
  );
}
