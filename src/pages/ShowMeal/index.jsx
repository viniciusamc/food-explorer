import { Container, Back, Content, Info, Tags } from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import salada from "../../assets/meals/salada.png";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

export function ShowMeal() {
  return (
    <Container>
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
            <Tag text="Vegetariano" />
            <Tag text="Vegano" />
            <Tag text="Sem Glúten" />
          </Tags>
        </Info>
      </Content>

      <Footer />
    </Container>
  );
}
