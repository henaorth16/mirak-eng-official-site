
const Slide = ({image, text, desc}) => {
  return (
    <div className="slide">
      <img src={image} alt={text}/>
      <p className="title text-lg md:text-[30px] lg:text-[40px] xl:text-[55px]">{text}</p>
      <p className="desc max-w-[86%] text-gray-200 sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px]">{desc}</p>
    </div>
  );
};

export default Slide;
