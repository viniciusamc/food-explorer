import { Card } from "./components/Card/input";
import { Header } from "./components/Header";
import salada from "./assets/meals/salada.svg";
import { Carousel } from "./components/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <Card
            image={salada}
            altImage="salada"
            title="Salada"
            value="15,00"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            image={salada}
            altImage="salada"
            title="Salada"
            value="15,00"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            image={salada}
            altImage="salada"
            title="Salada"
            value="15,00"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            image={salada}
            altImage="salada"
            title="Salada"
            value="15,00"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
