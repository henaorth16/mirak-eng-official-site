// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SlideCards from './SlideCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from "../assets/work.avif"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const notes = [
  { image: image, title: "Title of the body", body: "The government of Ethiopia is considering terminating its contract with the giant Chinese state enterprise, the China State Construction Engineering Corporation (CSCEC), over its huge financial adjustment claim to complete the second phase of the Adey Ababa stadium being built in Addis Ababa." },
  { image: image, title: "Title of the body", body: "The government uhsdu hudfh udhf suh suhfusih suhf suh  of Ethiopia is considering terminating its contract with the giant Chinese state enterprise, the China State Construction Engineering Corporation (CSCEC), over its huge financial adjustment claim to complete the second phase of the Adey Ababa stadium being built in Addis Ababa." },
  { image: image, title: "Title of the body", body: "The government of Ethiopia is considering terminating its contract with the giant Chinese state enterprise, the China State Construction Engineering Corporation (CSCEC), over its huge financial adjustment claim to complete the second phase of the Adey Ababa stadium being built in Addis Ababa." },
  { image: image, title: "Title of the body", body: "The government of Ethiopia is considering terminating its contract with the giant Chinese state enterprise, the China State Construction Engineering Corporation (CSCEC), over its huge financial adjustment claim to complete the second phase of the Adey Ababa stadium being built in Addis Ababa." },
  { image: image, title: "Title of the body", body: "The government of Ethiopia is considering terminating its contract with the giant Chinese state enterprise, the China State Construction Engineering Corporation (CSCEC), over its huge financial adjustment claim to complete the second phase of the Adey Ababa stadium being built in Addis Ababa." },
  { image: image, title: "Title of the body", body: "The government of Ethiopia is considering terminating its contract with the giant Chinese state enterprise, the China State Construction Engineering Corporation (CSCEC), over its huge financial adjustment claim to complete the second phase of the Adey Ababa stadium being built in Addis Ababa." },
]


const Projects = () => {
  return (
    <div className="my-7 pb-12 bg-[#f9f9f9] p-4" id="projects">
      <h1 className="text-4xl text-center font-bold mb-6">Projects</h1>
      <div className='md:w-[80%] md:h-[75vh] m-auto'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={5}
          // slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            832: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
        >
          {notes.map(note => (
            <SwiperSlide className='w-[12rem] h-[75vh] md:h-[63vh] bg-[#f9f9f9]' key={note.title}>
              {({ isNext }) => (
                <SlideCards image={note.image} isNext={isNext} title={note.title} body={note.body} />
              )}
            </SwiperSlide>
          ))
              }
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
