import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../styles.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <section id="home" className="w-full h-screen">
      <Swiper
        spaceBetween={30}
        effect="coverflow"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        id="swiper"
      >
        <SwiperSlide>
          <Slide
            image={image1}
            text={"MIRAK ENGINEERING"}
            desc={
              "Providing excellent service in Electro-mechanical system, supply and installation"
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={image2}
            text={"MECHANICAL ENGINEERING SERVICES"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae porro iste unde est in."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={image3}
            text={"ELECTRICAL ENGINEERING SERVICES"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae porro iste unde est in."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={image4}
            text={"FIRE FIGHTING SYSTEM"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae porro iste unde est in."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={image5}
            text={"HVAC/MECHANICAL"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae porro iste unde est in."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
