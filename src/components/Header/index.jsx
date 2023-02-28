import { Container } from "./styles";
import { Button } from "../Button";
import menuBurguer from "../../assets/icons/menu.svg";

export function Header() {
  return (
    <Container>
      <Button primary>{menuBurguer}</Button>
    </Container>
  );
}
