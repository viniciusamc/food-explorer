import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  gap: 24px;
  width: 100vw;
  overflow-x: scroll;
  padding: 0 32px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  cursor: grab; /* cursor de mão fechada para agarrar */
  &:active {
    cursor: grabbing; /* cursor de mão aberta enquanto estiver arrastando */
  }

  &::-webkit-scrollbar {
  }

  & > * {
    flex: none;
    scroll-snap-align: start;
  }
`;
