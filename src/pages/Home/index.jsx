import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router";
import banner from "../../assets/pictures/home-page.png";
import { Footer } from "../../components/Footer";

import { Section, Banner, Title, Content } from "./styles";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper";
import { useAuth } from "../../hooks/auth";
import { GoTop } from "../../components/GoTop";

SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

export function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState();

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    async function getMeals() {
      const response = await api.get(
        `/meals/?name=${search}&ingredients=${search}`
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
      <GoTop />
      <Header search={setSearch} />
      <Banner>
        <img src={banner} alt="banner" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
        </div>
      </Banner>

      <Content>
        <Section>
          <h1>Refeições</h1>
          {meals.length === 0 ? (
            <p>nenhum item</p>
          ) : (
            <Swiper
              autoplay={true}
              delay={1000}
              style={{ width: "100%" }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={-150}
              centeredSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {meals.map((meal) => (
                <SwiperSlide key={meal.id}>
                  <Card
                    id={meal.id}
                    title={meal.name}
                    image={`${api.defaults.baseURL}files/${meal.picture}`}
                    altImage={meal.name}
                    desc={meal.desc}
                    value={meal.price}
                    onClick={() => handleDetail(meal.id)}
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev swiper-button-white"></div>
              <div className="swiper-button-next swiper-button-white"></div>
            </Swiper>
          )}
        </Section>

        <Section>
          <h1>Sobremesas</h1>
          {meals.length === 0 ? (
            <p>nenhum item</p>
          ) : (
            <Swiper
              autoplay={true}
              delay={1000}
              style={{ width: "100%" }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={-150}
              centeredSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {meals
                .filter((meal) => meal.category === "Sobremesa")
                .map((meal) => (
                  <SwiperSlide key={meal.id}>
                    <Card
                      id={meal.id}
                      title={meal.name}
                      image={`${api.defaults.baseURL}files/${meal.picture}`}
                      altImage={meal.name}
                      desc={meal.desc}
                      value={meal.price}
                    />
                  </SwiperSlide>
                ))}
              <div className="swiper-button-prev swiper-button-white"></div>
              <div className="swiper-button-next swiper-button-white"></div>
            </Swiper>
          )}
        </Section>

        <Section>
          <h1>Bebidas</h1>
          {meals.length === 0 ? (
            <p>nenhum item</p>
          ) : (
            <Swiper
              autoplay={true}
              delay={1000}
              style={{ width: "100%" }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={-150}
              centeredSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {meals
                .filter((meal) => meal.category === "Bebidas")
                .map((meal) => (
                  <SwiperSlide key={meal.id}>
                    <Card
                      id={meal.id}
                      title={meal.name}
                      image={`${api.defaults.baseURL}files/${meal.picture}`}
                      altImage={meal.name}
                      desc={meal.desc}
                      value={meal.price}
                    />
                  </SwiperSlide>
                ))}
              <div className="swiper-button-prev swiper-button-white"></div>
              <div className="swiper-button-next swiper-button-white"></div>
            </Swiper>
          )}
        </Section>
      </Content>

      <Footer />
    </>
  );
}
