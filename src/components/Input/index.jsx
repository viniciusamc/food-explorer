import { Container, Content } from "./styles";

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Content>
      {<label>{label}</label>}
      <Container>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </Container>
    </Content>
  );
}
