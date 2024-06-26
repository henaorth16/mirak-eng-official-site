import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import part1 from "../assets/icons/part1.png"
import part2 from "../assets/icons/part2.jpg"
import part3 from "../assets/icons/part3.png"
import part4 from "../assets/icons/part4.png"
import part5 from "../assets/icons/part5.jpg"
import part6 from "../assets/icons/part6.jpg"
import part7 from "../assets/icons/part7.jpg"
import part8 from "../assets/icons/part8.png"
import part9 from "../assets/icons/part9.jpg"
const imageList = [part1, part2, part3, part4, part5, part6, part7, part8, part9]
function TrustedBy() {
    register()
    return (
        <div id='clients'>
            <h1 className="text-4xl text-center font-bold mb-6">Trusted by</h1>
            <Swiper
                modules={[EffectCoverflow, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={3}
                slidesPerView={7}
                // effect="coverflow"
                autoplay={{
                    // delay: 1500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {imageList.map(item => (
                    <SwiperSlide key={item}>
                        <div className='w-[120px] overflow-hidden  flex flex-col gap-2'>
                            <img className=' object-contain grayscale-[1] bg-blend-screen' src={item} alt="logo" />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )

}

export default TrustedBy;
