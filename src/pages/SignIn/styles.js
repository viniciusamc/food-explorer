import styled from "styled-components";

export const Container = styled.div``;

export const Logo = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 500px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
