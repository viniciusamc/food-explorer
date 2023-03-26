import { Container } from "./styles";

export function Button({ text, load = false, icon, ...rest }) {
  return (
    <Container type="button" disabled={load} {...rest}>
      {icon}
      {load ? "Carregando..." : text}
    </Container>
  );
}
