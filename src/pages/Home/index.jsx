import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Section } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

export function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await api.get("/meals/list");
      setMeals(response.data.getIndex);
    }

    getMeals();
  }, []);

  return (
    <>
      <Header />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={"4"}
        centeredSlides={true}
        loop={true}
        spaceBetween={55}
        className="mySwiper"
      >
        {meals.map((meal) => (
          <SwiperSlide key={meal.id}>
            <Card
              title={meal.name}
              image={meal.picture}
              altImage={meal.name}
              value={meal.price}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </Swiper>
    </>
  );
}
