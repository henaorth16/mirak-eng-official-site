import { useState } from "react";

const Card = ({title, img, desc, optional, descOpt}) => {
const [read, setRead] = useState(false)
  return (
    <div className="card bg-white mx-auto">
      <h3 className="title">{title}</h3>
      <img className="image hover:scale-[0.91] transition-all duration-300" src={img} alt={title} />
      {/* //desc or main text */}
      <p className={"desc"}>{read ? desc : desc.split(" ").slice(0, 22).join(" ")+ "..."}</p>
      <p className={read?"desc":""}>{read ? optional : ""}</p>
      <p className={read?"desc":""}>{read ? descOpt : ""}</p>
      <button className="text-logo font-medium m-1" onClick={() => setRead(!read)}>{read ? "Read less": "Read more"}</button>
    </div>
  );
};

export default Card;
