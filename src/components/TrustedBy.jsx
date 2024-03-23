import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import part1 from "../assets/icons/part1.png";
import part2 from "../assets/icons/part2.jpg";
import part3 from "../assets/icons/part3.png";
import part4 from "../assets/icons/part4.jpg";
import part5 from "../assets/icons/part5.jpg";
import part6 from "../assets/icons/part6.png";
import part7 from "../assets/icons/part7.png";
import part8 from "../assets/icons/part8.png";
const imageList = [part1, part2, part3, part4, part5, part6, part7, part8];
function TrustedBy() {
  register();
  return (
    <div id="clients">
      <h1 className="text-4xl text-center font-bold mb-6">Trusted by</h1>
      <Swiper
        modules={[
          EffectCoverflow,
          Autoplay,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
        ]}
        spaceBetween={1}
        slidesPerView={5}
        // effect="coverflow"
        autoplay={{
          // delay: 1500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {imageList.map((item) => (
          <SwiperSlide key={item}>
            <div className="w-[100px] overflow-hidden">
              <img
                className=" object-contain grayscale-[1] bg-blend-screen"
                src={item}
                alt="logo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrustedBy;
