import { Container, Back, Content, Info } from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import salada from "../../assets/meals/salada.png";
import { Tag } from "../../components/Tag";

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

          <Tag text="ABLA" />
        </Info>
      </Content>
    </Container>
  );
}
