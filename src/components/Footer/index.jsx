import { Container } from "./styles";
import logo from "../../assets/footer.svg";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h3>&copy; {year} - Todos os direitos reservados.</h3>
    </Container>
  );
}
