import { Container, Back, Content, Info, Tags, Cart } from "./styles";

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import salada from "../../assets/meals/salada.png";
import recipe from "../../assets/icons/receipt.svg";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export function ShowMeal() {
  const [count, setCount] = useState(1);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <Container>
      <Header />
      <Back>
        <AiOutlineLeft />
        <span>Voltar</span>
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

      <Footer />
    </Container>
  );
}
