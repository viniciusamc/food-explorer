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
              <Input placeholder={"Hello"} label="as" />
            </Label>
            <Label>
              <Input placeholder={"Ex.: Salada Ceasar"} type={"text"} />
            </Label>
            <Label>
              <Input placeholder={"Refeição"} type={"select"} />
            </Label>
          </Col3>
        </Form>
      </Content>
    </Container>
  );
}
