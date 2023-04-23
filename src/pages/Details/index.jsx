import { Container, Back, Content, Info, Tags, Cart } from "./styles";

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import salada from "../../assets/meals/salada.png";
import recipe from "../../assets/icons/receipt.svg";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { GoTop } from "../../components/GoTop";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

export function Details() {
  const [count, setCount] = useState(1);
  const { user } = useAuth();
  const [data, setData] = useState({});
  const [image, setImage] = useState();

  const params = useParams();

  useEffect(() => {
    async function getDetails() {
      await api.get(`/meals/details/${params.id}`).then((response) => {
        setData(response.data);
        console.log(response);
        setImage(`${api.defaults.baseURL}files/${response.data.picture}`);
      });
    }
    getDetails();
  }, []);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleAddToCart() {
    api.post("/cart", {});
  }

  return (
    <Container>
      <Header />
      <Back>
        <Link to="/">
          <AiOutlineLeft />
          Voltar
        </Link>
      </Back>
      {data && (
        <Content>
          <img src={image} alt={data.name} />

          <Info>
            <h1>{data.name}</h1>
            <p>{data.desc}</p>
            {data.ingredients && (
              <Tags>
                {data.ingredients.map((item) => {
                  return <Tag text={item} />;
                })}
              </Tags>
            )}

            <Cart>
              <AiOutlineMinus onClick={handleRemove} />
              <span>{count}</span>
              <AiOutlinePlus onClick={handleAdd} />

              <Button
                icon={<img src={recipe} />}
                text={`pedir - R$ ${data.price}`}
              />
            </Cart>
          </Info>
        </Content>
      )}
      <GoTop />

      <Footer />
    </Container>
  );
}
