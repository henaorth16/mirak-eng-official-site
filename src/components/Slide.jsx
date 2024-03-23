
const Slide = ({image, text, desc}) => {
  return (
    <div className="slide">
      <img src={image} alt={text}/>
      <p className="title text-[17px] md:text-[30px] md:tracking-wide lg:text-[40px] xl:text-[55px]">{text}</p>
      <p className="desc max-w-[86%] text-gray-200 text-[15px]">{desc}</p>
    </div>
  );
};

export default Slide;
