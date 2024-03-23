// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SlideCards from './SlideCards';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const notes = [
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
  { title: "title of the body", body: "this includes most contents of the ouline for this object" },
]


const Projects = () => {
  return (
    <div className="my-7 pb-12 bg-gray-100 p-4" id="projects">
      <h1 className="text-4xl text-center font-bold mb-6">Projects</h1>
      <div className='md:w-[80%] m-auto'>
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
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
        >
          {notes.map(note => (
            <SwiperSlide className='w-40 h-[65vh] bg-gray-100' key={note.title}>
              {({ isNext }) => (
                <SlideCards isNext={isNext} title={note.title} body={note.body} />
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
