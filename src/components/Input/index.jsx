import { Container, Content } from "./styles";
import { IMaskInput } from "react-imask";

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Content>
      {<label>{label}</label>}
      <Container>
        {Icon && <Icon size={20} />}
        <IMaskInput {...rest} />
      </Container>
    </Content>
  );
}
