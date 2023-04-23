import {
  Container,
  Content,
  Text,
  Quantity,
  Favorite,
  StyledButton,
} from "./styles";
import { AiOutlinePlus, AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import { IoIosRemove } from "react-icons/io";
import { useState, useEffect } from "react";
import heart from "../../assets/icons/heart.svg";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Card({ image, altImage, title, value, onClick }) {
  const [req, setReq] = useState(1);
  const { user } = useAuth();

  function handleAdd() {
    setReq(req + 1);
  }

  function handleSub() {
    setReq(req - 1);

    if (req <= 1) {
      setReq(1);
    }
  }

  return (
    <Container onClick={onClick}>
      <Content>
        <img src={image} alt={altImage} />

        <Text>
          <h2>
            {title} {AiOutlineRight}
          </h2>
          <p>{value}</p>
        </Text>

        <Quantity>
          <span>
            <IoIosRemove onClick={handleSub} />
          </span>
          <h3>{req}</h3>
          <span>
            <AiOutlinePlus onClick={handleAdd} />
          </span>
        </Quantity>

        {user.role === "admin" ? (
          <StyledButton text="Editar" />
        ) : (
          <StyledButton text="Incluir" />
        )}

        <Favorite>
          <img src={heart} />
        </Favorite>
      </Content>
    </Container>
  );
}
