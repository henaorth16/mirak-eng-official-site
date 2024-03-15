
const Slide = ({image, text, desc}) => {
  return (
    <div className="slide">
      <img src={image} alt={text}/>
      <p className="title text-[16px] md:text-[30px] lg:text-[40px] xl:text-[60px]">{text}</p>
      <p className="desc px-4 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px]">{desc}</p>
    </div>
  );
};

export default Slide;
