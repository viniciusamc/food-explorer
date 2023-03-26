import { Container } from "./styles";

export function Button({ text, load = false, icon, altText, ...rest }) {
  return (
    <Container type="button" disabled={load} {...rest}>
      {icon}
      {load ? "Carregando..." : text}
      <p>{altText}</p>
    </Container>
  );
}
