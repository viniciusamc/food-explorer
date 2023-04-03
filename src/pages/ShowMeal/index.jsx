import { Container, Back, Content } from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import salada from "../../assets/meals/salada.png";

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
        </Info>
      </Content>
    </Container>
  );
}
