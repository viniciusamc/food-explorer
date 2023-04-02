import { Container, Content, Link, Form, Label, Col } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { AiOutlineLeft } from "react-icons/ai";

export function ShowMeal() {
  return (
    <Container>
      <Header />
      <Link>
        <AiOutlineLeft />
      </Link>
      <h1>Adicionar prato</h1>
      <Content>
        <Form>
          <Col>
            <Input placeholder={"Hello"} label="Imagem do prato" />
            <Input placeholder={"Ex.: Salada Ceasar"} label="Nome" />
            <Input placeholder={"Refeição"} type={"select"} label="Categoria" />
          </Col>

          <Col>
            <Input placeholder={"Ingredientes"} label="Ingredientes" />
            <Input placeholder={"R$ 0,00"} label="Preço" />
          </Col>
        </Form>
      </Content>
    </Container>
  );
}
