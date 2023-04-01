import { Container, Content, Link, Form, Label, Col3 } from "./styles";
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
          <Col3>
            <Label>
              <label>Imagem do prato</label>
              <Input placeholder={"Hello"} type={"image"} />
            </Label>
            <Label>
              <label>Imagem do prato</label>
              <Input placeholder={"Ex.: Salada Ceasar"} type={"text"} />
            </Label>
            <Label>
              <label>Imagem do prato</label>
              <Input placeholder={"Refeição"} type={"select"} />
            </Label>
          </Col3>
        </Form>
      </Content>
    </Container>
  );
}
