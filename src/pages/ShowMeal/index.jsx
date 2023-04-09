import { Container, Back, Content, Info, Tags, Cart } from "./styles";

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import salada from "../../assets/meals/salada.png";
import recipe from "../../assets/icons/receipt.svg";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { GoTop } from "../../components/GoTop";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function ShowMeal() {
  const [count, setCount] = useState(1);
  const { user } = useAuth();

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleAddToCart() {
    api.post("/cart", {});
  }

  return (
    <Container>
      <Header />
      <Back>
        <Link to="/">
          <AiOutlineLeft />
          Voltar
        </Link>
      </Back>

      <Content>
        <img src={salada} alt="Prato" />

        <Info>
          <h1>Salada de Frutas</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Tags>
            <Tag text="alface" />
            <Tag text="cebola" />
            <Tag text="pão naan" />
            <Tag text="pepino" />
            <Tag text="rabanete" />
            <Tag text="tomate" />
          </Tags>

          <Cart>
            <AiOutlineMinus onClick={handleRemove} />
            <span>{count}</span>
            <AiOutlinePlus onClick={handleAdd} />

            <Button icon={<img src={recipe} />} text="pedir - R$ 25,00" />
          </Cart>
        </Info>
      </Content>
      <GoTop />
      <Footer />
    </Container>
  );
}
