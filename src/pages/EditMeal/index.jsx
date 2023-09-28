import React, { useState } from "react";
import {
  Container,
  Content,
  Link,
  Form,
  Label,
  Col,
  Select,
  Section,
  Interaction,
  Ingredients,
  IngredientsList,
} from "./styles";
import { Header } from "../../components/Header";
import { AiOutlineLeft } from "react-icons/ai";
import { Input } from "../../components/Input";
import { IngredientItem } from "../../components/IngredientItem";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { GoTop } from "../../components/GoTop";

export function EditMeal() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [originalDesc, setOriginalDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const { user } = useAuth();
  const { id } = useParams();

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

  const navigate = useNavigate();

  function handleNewIngredient() {
    if (!newIngredient) {
      return;
    }

    if (ingredients.includes(newIngredient)) {
      alert("Ingrediente já adicionado");
      return;
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
  }

  function handleRemoveIngredient(ingredient) {
    setIngredients((prevState) =>
      prevState.filter((prevIngredient) => prevIngredient !== ingredient),
    );
  }

  function handleFile(e) {
    setImage(e.target.files[0]);
  }

  async function handleUpdateMeal() {
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

    await api.put(`/meals/${id}`, formData).then((response) => {
      alert("Prato atualizado com sucesso" + response.data);
      navigate(`/details/${id}`);
    });
  }

  async function handleDeleteMeal() {
    confirm("Tem certeza que deseja excluir este prato?");

    if (!confirm) {
      return;
    }

    await api.delete(`/meals/${id}`).then((response) => {
      alert("Prato excluído com sucesso");
      navigate("/");
    });
  }

  useEffect(() => {
    async function getIngredients() {
      await api.get(`/meals/details/${id}`).then((response) => {
        setImage(response.data.picture);
        setName(response.data.name);
        setCategory(response.data.category);
        setPrice(response.data.price);
        setIngredients(response.data.ingredients);
        setDesc(response.data.desc);
        setOriginalDesc(response.data.desc);
      });
    }

    getIngredients();
  }, [id]);

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
              value={name}
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
              placeholder={"R$ 0,00"}
              value={price}
              label="Preço"
              onChange={(e) => setPrice(e.target.value) || e.target.value}
            />
          </Col>

          <TextArea
            placeholder={desc}
            label="Descrição"
            value={desc || originalDesc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <Interaction>
            <Button
              text={"Excluir Prato"}
              style={{
                backgroundColor: "#0D161B",
                width: "20%",
              }}
              onClick={handleDeleteMeal}
            />
            <Button
              text={"Salvar Alterações"}
              style={{
                backgroundColor: "#AB4D55",
                width: "20%",
              }}
              onClick={handleUpdateMeal}
            />
          </Interaction>
        </Form>
      </Content>
    </Container>
  );
}
