import img from "../assets/logo.png";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { FaDiagramProject } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useScroll } from "../hook/useScroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const bg = useScroll();
  return (
    <nav
      style={{
        backgroundColor: bg ? "white" : "transparent",
        color: bg ? "black" : "white",
      }}
      className={`text-white h-16 px-5 py-2 flex items-center justify-between fixed bg-transparent w-screen z-50`}
    >
      <h1 className="flex gap-2 sm:gap-4 items-center font-bold text-[12px] sm:text-[18px]">
        <img
          className="w-[20px] sm:w-[30px] md:w-[40px] lg:w-[50px]"
          src={img}
          alt="Logo"
        />
        <span className="text-logo">MIRAK</span>ENGINEERING
      </h1>
      <ul className="items-center gap-7 px-5 font-semibold cursor-pointer hidden md:flex">
        <li className="text-xs transition-all duration-500">
          <a href="#">HOME</a>
        </li>
        <li className="text-xs transition-all duration-500">
          <a href="#about">ABOUT</a>
        </li>
        <li className="text-xs transition-all duration-500">
          <a href="#services">SERVICES</a>
        </li>
        <li className="text-xs transition-all duration-500">
          <a href="">PROJECTS</a>
        </li>
        <li className="text-xs transition-all duration-500">
          <a href="">CLIENTS</a>
        </li>
      </ul>

      <a
        href="#contact"
        className="bg-logo hidden md:block rounded-full p-2 mr-2 text-white text-xs transition-all duration-500"
      >
        CONTACT
      </a>
      <RiMenu2Line onClick={()=>setOpen(true)} className="md:hidden" />
      <div className={`absolute md:hidden w-full bg-white left-0 top-0 ${ open? "flex" : "hidden" } justify-between p-5 shadow-lg`}>
        <ul className="gap-7 text-black font-semibold cursor-pointer flex flex-col ">
          <li className="text-xs transition-all duration-500 flex items-center gap-3">
            <IoMdHome className="text-black" />
            <a onClick={()=>setOpen(false)} href="#">HOME</a>
          </li>
          <li className="text-xs transition-all duration-500 flex items-center gap-3">
            <FaCircleInfo className="text-black" />
            <a onClick={()=>setOpen(false)} href="#about">ABOUT</a>
          </li>
          <li className="text-xs transition-all duration-500 flex items-center gap-3">
            <GrServices className="text-black" />
            <a onClick={()=>setOpen(false)} href="">SERVICES</a>
          </li>
          <li className="text-xs transition-all duration-500 flex items-center gap-3">
            <FaDiagramProject className="text-black" />
            <a onClick={()=>setOpen(false)} href="">PROJECTS</a>
          </li>
          <li className="text-xs transition-all duration-500 flex items-center gap-3">
            <FaUserFriends className="text-black" />
            <a onClick={()=>setOpen(false)} href="">CLIENTS</a>
          </li>
          <li className="text-xs transition-all duration-500 flex items-center gap-3">
            <RiCustomerService2Fill className="text-black" />
            <a onClick={()=>setOpen(false)} href="#contact">CONTACT</a>
          </li>
        </ul>
        <IoClose onClick={()=>setOpen(false)} className="text-black cursor-pointer"/>
      </div>
    </nav>
  );
};

export default NavBar;
