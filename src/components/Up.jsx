import { IoIosArrowUp } from "react-icons/io";

const Up = ({arr}) => {
  return (
    <a
      style={{ display: arr ? "flex" : "none" }}
      className="up-arrow cursor-pointer"
      href="#home"
    >
      <IoIosArrowUp />
    </a>
  );
};

export default Up;
