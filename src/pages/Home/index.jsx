import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router";
import banner from "../../assets/pictures/home-page.png";

import { Section, Banner } from "./styles";

SwiperCore.use([Navigation, Pagination]);

export function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function getMeals() {
      const response = await api.get(
        `/meals/?name=${search}&ingredients=${search}&category=${search}`
      );

      setMeals(response.data);
    }

    getMeals();
  }, [search]);

  function handleDetail(id) {
    navigate(`/details/${id}`);
  }

  return (
    <>
      <Header />

      <Banner>
        <img src={banner} alt="banner" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
        </div>
      </Banner>
      <Section>
        <Swiper
          style={{ width: "100vw" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={"4"}
          centeredSlides={true}
          loop={true}
          spaceBetween={55}
        >
          {meals
            .filter((meal) => meal.category == "sobremesa")
            .map((meal) => (
              <SwiperSlide key={meal.id}>
                <Card
                  title={meal.name}
                  image={`${api.defaults.baseURL}files/${meal.picture}`}
                  altImage={meal.name}
                  value={meal.price}
                  onClick={() => handleDetail(meal.id)}
                />
              </SwiperSlide>
            ))}
          <div className="swiper-button-prev swiper-button-white"></div>
          <div className="swiper-button-next swiper-button-white"></div>
        </Swiper>
      </Section>
    </>
  );
}
