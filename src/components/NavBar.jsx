import img from "../assets/logo.png";
import { useState } from "react";
import { useScroll } from "../hook/useScroll";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { FaDiagramProject } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

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
        <li className="text-sm transition-all duration-500">
          <a href="#">HOME</a>
        </li>
        <li className="text-sm transition-all duration-500">
          <a href="#about">ABOUT</a>
        </li>
        <li className="text-sm transition-all duration-500">
          <a href="#services">SERVICES</a>
        </li>
        <li className="text-sm transition-all duration-500">
          <a href="">PROJECTS</a>
        </li>
        <li className="text-sm transition-all duration-500">
          <a href="#clients">CLIENTS</a>
        </li>
      </ul>

      <a
        href="#contact"
        className="bg-logo hidden md:block rounded-full p-2 mr-2 text-white text-xs transition-all duration-500"
      >
        CONTACT
      </a>



      <RiMenu2Line onClick={() => setOpen(true)} className="md:hidden cursor-pointer text-3xl p-1 rounded-full hover:bg-gray-200 hover:bg-opacity-50" />
      <div className={`absolute w-full bg-white left-0 top-0 ${open ? "flex" : "hidden"} justify-between p-5 shadow-lg`}>

        <ul className="w-full text-black font-semibold cursor-pointer flex flex-col items-center">

          <li className=" transition-all w-full duration-500 py-2">
            <a className="w-full flex gap-3 justify-center" onClick={() => setOpen(false)} href="#"><IoMdHome className="text-xl text-gray-800" />HOME</a>
          </li>

          <li className=" transition-all w-full duration-500 py-2">
            <a className="w-full flex gap-3 justify-center" onClick={() => setOpen(false)} href="#about"><FaCircleInfo className="text-xl text-gray-800" />ABOUT</a>
          </li>

          <li className=" transition-all w-full duration-500 py-2">
            <a className="w-full flex gap-3 justify-center" onClick={() => setOpen(false)} href="#services"><GrServices className="text-xl text-gray-800" />SERVICES</a>
          </li>

          <li className=" transition-all w-full duration-500 py-2">
            <a className="w-full flex gap-3 justify-center" onClick={() => setOpen(false)} href="#projects"><FaDiagramProject className="text-xl text-gray-800" />PROJECTS</a>
          </li>

          <li className=" transition-all w-full duration-500 py-2">
            <a className="w-full flex gap-3 justify-center" onClick={() => setOpen(false)} href=""><FaUserFriends className="text-xl text-gray-800" />CLIENTS</a>
          </li>

          <li className=" transition-all w-full duration-500 py-2">
            <a className="w-full flex gap-3 justify-center" onClick={() => setOpen(false)} href="#contact"><RiCustomerService2Fill className="text-xl text-gray-800" />CONTACT</a>
          </li>

        </ul>
        <IoClose onClick={() => setOpen(false)} className="text-black cursor-pointer text-3xl p-1 rounded-full hover:bg-gray-200 hover:bg-opacity-50" />
      </div>
    </nav>
  );
};

export default NavBar;
