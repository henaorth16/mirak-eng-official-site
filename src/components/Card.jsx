const Card = ({title, img, desc, optional, descOpt}) => {
  return (
    <div className="card bg-white">
      <h3 className="title">{title}</h3>
      <img className="image hover:scale-[0.91] transition-all duration-300" src={img} alt={title} />
      <p className="desc">{desc}</p>
      <p className="desc">{optional}</p>
      <p className="desc">{descOpt}</p>
    </div>
  );
};

export default Card;
