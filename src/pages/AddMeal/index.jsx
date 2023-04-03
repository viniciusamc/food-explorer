import { Container, Content, Link, Form, Label, Col } from "./styles";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { AiOutlineLeft } from "react-icons/ai";
import { IngredientItem } from "../../components/IngredientItem";

export function AddMeal() {
  return (
    <Container>
      <Header />
      <Content>
        <Link>
          <AiOutlineLeft />
        </Link>
        <h1>Adicionar prato</h1>
        <Form>
          <Col>
            <Input placeholder={"Hello"} label="Imagem do prato" />
            <Input placeholder={"Ex.: Salada Ceasar"} label="Nome" />
            <Input placeholder={"Refeição"} type={"select"} label="Categoria" />
          </Col>

          <Col>
            <IngredientItem value="Pão " />
            <IngredientItem isNew placeholder="Adicionar  " />
            <Input placeholder={"R$ 0,00"} label="Preço" />
          </Col>

          <TextArea
            placeholder={
              "Fale brevemente sobre o prato, seus ingredientes e composição"
            }
            label="Descrição"
          />

          <Button
            text={"Salvar Alterações"}
            style={{ backgroundColor: "#AB4D55" }}
          />
        </Form>
      </Content>
    </Container>
  );
}
