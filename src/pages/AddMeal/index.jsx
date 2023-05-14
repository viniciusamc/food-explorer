import { Container, Content, Link, Form, Label, Col } from "./styles";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { AiOutlineLeft } from "react-icons/ai";
import { IngredientItem } from "../../components/IngredientItem";

import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export function AddMeal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState();

  async function handleAddMeal() {
    // if (!title || !desc || !price || !category || !imageFile) {
    //   alert("Preencha todos os campos!");
    //   return;
    // }

    const formData = new FormData();

    formData.append("name", title);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", imageFile);

    console.log(formData);

    try {
      const response = await api.post("/meals", formData);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function newIngredient() {
    const [ingredients, setIngredients] = useState([]);

    function handleNewIngredient() {
      setIngredients((prevState) => [...prevState, ingredients]);
    }
  }

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
            <Input
              placeholder={"Hello"}
              label="Imagem do prato"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <Input
              placeholder={"Ex.: Salada Ceasar"}
              label="Nome"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder={"Refeição"}
              type={"select"}
              label="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            />
          </Col>

          <Col>
            {ingredients.map((ingredient, index) => (
              <IngredientItem
                value={ingredient}
                onClick={() => {
                  handleNewIngredient();
                }}
                key={String(index)}
              />
            ))}

            <IngredientItem
              isNew
              placeholder="Adicionar"
              onChange={(e) => set}
              onClick={newIngredient}
            />
            <Input
              placeholder={"R$ 0,00"}
              label="Preço"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>

          <TextArea
            placeholder={
              "Fale brevemente sobre o prato, seus ingredientes e composição"
            }
            label="Descrição"
            onChange={(e) => setDesc(e.target.value)}
          />

          <Button
            text={"Salvar Alterações"}
            style={{ backgroundColor: "#AB4D55" }}
            onClick={handleAddMeal}
          />
        </Form>
      </Content>
    </Container>
  );
}
