import { Container, Content, Text, Quantity, Favorite } from "./styles";
import { Button } from "../Button";

import { AiOutlinePlus, AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import { IoIosRemove } from "react-icons/io";

export function Card({ image, altImage, title, value, ...rest }) {
  return (
    <Container>
      <Content>
        <img src={image} alt={altImage} />

        <Text>
          <h2>
            {title} {AiOutlineRight}
          </h2>
          <p>{value}</p>
        </Text>

        <Quantity>
          <IoIosRemove />
          <h3>01</h3>
          <AiOutlinePlus />
        </Quantity>

        <Button text="Inclur" />

        <Favorite>
          <AiOutlineHeart />
        </Favorite>
      </Content>
    </Container>
  );
}
