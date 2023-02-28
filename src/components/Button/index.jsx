import { Container } from "./styles";

export function Button({ text }) {
  return (
    <Container>
      <button>{text}</button>
    </Container>
  );
}
