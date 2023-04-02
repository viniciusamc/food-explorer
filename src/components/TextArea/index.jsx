import { Content, Container } from "./styles";

export function TextArea({ label, value, ...rest }) {
  return (
    <Content>
      <label>{label}</label>
      <Container {...rest}>{value}</Container>;
    </Content>
  );
}
