import { Content, Container } from "./styles";

export function TextArea({ label, value, ...rest }) {
  return (
    <Content>
      <label>{label}</label>
      <textarea {...rest}>{value}</textarea>;
    </Content>
  );
}
