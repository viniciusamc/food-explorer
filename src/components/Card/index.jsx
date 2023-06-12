import {
  Container,
  Content,
  Text,
  Quantity,
  Favorite,
  StyledButton,
  Img,
} from "./styles";
import { AiOutlinePlus, AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import { IoIosRemove } from "react-icons/io";
import { useState, useEffect } from "react";
import heart from "../../assets/icons/heart.svg";
import pencil from "../../assets/icons/pencil.svg";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router";

export function Card({
  image,
  altImage,
  title,
  value,
  desc,
  // onClick,
  // onFavorite,
  id,
}) {
  const [req, setReq] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleAdd() {
    setReq(req + 1);
  }

  function handleSub() {
    setReq(req - 1);

    if (req <= 1) {
      setReq(1);
    }
  }

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  function handleView(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container>
      <Content>
        <Img src={image} alt={altImage} />

        <Text>
          <h2>
            {title} {AiOutlineRight}
          </h2>
          <h3>{desc}</h3>
          <p>{value}</p>
        </Text>

        {user.role === "admin" ? (
          <></>
        ) : (
          <Quantity>
            <span>
              <IoIosRemove onClick={handleSub} />
            </span>
            <h3>{req}</h3>
            <span>
              <AiOutlinePlus onClick={handleAdd} />
            </span>
          </Quantity>
        )}

        {user.role === "admin" ? (
          <></>
        ) : (
          <StyledButton
            text="Incluir"
            onClick={() => {
              handleView(id);
            }}
          />
        )}

        <Favorite>
          {user.role === "admin" ? (
            <img
              src={pencil}
              onClick={() => {
                handleEdit(id);
              }}
            />
          ) : (
            <img src={heart} />
          )}
        </Favorite>
      </Content>
    </Container>
  );
}
