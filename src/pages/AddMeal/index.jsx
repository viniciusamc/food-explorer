import React, { useState } from "react";
import {
  Container,
  Content,
  Link,
  Form,
  Label,
  IngredientsList,
  Col,
  Select,
  Section,
  Ingredients,
} from "./styles";
import { Header } from "../../components/Header";
import { AiOutlineLeft } from "react-icons/ai";
import { Input } from "../../components/Input";
import { IngredientItem } from "../../components/IngredientItem";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { GoTop } from "../../components/GoTop";

export function AddMeal() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const { user } = useAuth();

  const [options, setOptions] = useState([
    "Categoria",
    "Entrada",
    "Prato Principal",
    "Refeições",
    "Sobremesa",
    "Bebida",
  ]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleNewIngredient() {
    if (!newIngredient) {
      return;
    }

    if (ingredients.includes(newIngredient)) {
      alert("Ingrediente já adicionado");
      return;
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(ingredient) {
    setIngredients((prevState) =>
      prevState.filter((prevIngredient) => prevIngredient !== ingredient)
    );
  }

  function handleFile(e) {
    setImage(e.target.files[0]);
  }

  async function handleAddMeal() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("desc", desc);
    formData.append("user_id", user.id);

    if (category === "Categoria") {
      alert("Selecione uma categoria");
      return;
    }

    if (!image || !name || !category || !price || !ingredients || !desc) {
      alert("Preencha todos os campos");
      return;
    }

    await api
      .post("/meals", formData)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });

    name('');
  }

  return (
    <Container>
      <GoTop />
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
              type="file"
              onChange={handleFile}
            />
            <Input
              placeholder={"Ex.: Salada Ceasar"}
              label="Nome"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />

            <Section>
              <Label>Categoria</Label>
              <Select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {options.map((option, index) => (
                  <option value={option} key={String(index)}>
                    {option}
                  </option>
                ))}
              </Select>
            </Section>
          </Col>

          <Col>
            <Ingredients>
              <Label>Ingredientes</Label>
              <IngredientsList>
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    key={String(index)}
                  />
                ))}

                <IngredientItem
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleNewIngredient}
                />
              </IngredientsList>
            </Ingredients>
            <Input
              label="Preço"
                type="number"
              onChange={(e) => setPrice(e.target.value) || e.target.value}
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
            style={{
              backgroundColor: "#AB4D55",
              width: "20%",
              alignSelf: "flex-end",
            }}
            onClick={handleAddMeal}
          />
        </Form>
      </Content>
    </Container>
  );
}
