import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";

const Footer = () => {
const [year, setYear] = useState(0);
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <div className="w-full h-auto bg-black relative">
      <div className="flex flex-wrap justify-center">
        <div className="mt-10 w-80 mx-10 p-3">
          <h1 className="uppercase font-extrabold text-logo">
            Find Us On Social Media
          </h1>
          <p className="text-sm text-white mt-10">
            Stay updated with our latest posts by liking us on Facebook.
            Additionally, connect with us on LinkedIn and Twitter for more
            updates. Follow our profiles below.
          </p>
          <ul className="flex mt-10 gap-4">
            <li className="text-white hover:text-logo">
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="text-white hover:text-logo">
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li className="text-white hover:text-logo">
              <a href="">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="text-white hover:text-logo">
              <a href="">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 w-80 mx-10 p-3">
          <h1 className="uppercase text-logo font-extrabold">Contacts</h1>
          <ul className="text-white text-md mt-10">
            <li className="text-md font-semibold">
              Phone 1: <span className="text-sm opacity-70">+251 911 733 782</span>
            </li>
            <li className="text-md font-semibold">
              Phone 2: <span className="text-sm opacity-70">+251 911 763 576</span>
            </li>
            <li className="text-md font-semibold">
              Fax: <span className="text-sm opacity-70">+251 111 579 480</span>
            </li>
            <li className="text-md font-semibold">
              P.O.Box:{" "}
              <span className="text-sm opacity-70">30335, Addis Ababa, Ethiopia</span>
            </li>
            <li className="text-md font-semibold ">
              Email: <span className="text-sm opacity-70">info@mirakengineering.com</span>
            </li>
          </ul>
        </div>
        <div className="mt-10 w-80 mx-10 p-3">
          <ul>
            <li className="text-gray-200 text-sm">
              <h1 className="text-logo text-md font-bold mb-3">
                General Manager:
              </h1>
              <p>Sirak Kebede</p>
              <p>sirak@mirakengineering.com</p>
              <p>+251 911 733 782</p>
            </li>
            <li className="text-gray-200 text-sm mt-5">
              <h1 className="text-logo font-bold text-md mb-3">
                Operation Manger:
              </h1>
              <p>Mintesnot Tsadiku</p>
              <p>mintesnot@mirakengineering.com</p>
              <p>+251 911 763 576</p>
            </li>
            <li>
              <p className="text-[12px] mt-5 text-white">
                Churchill AVE, Piasa Shopping center building, 7th floor, office
                number 702, Addis Ababa, Ethiopia
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-24 bg-[#111111] flex justify-center items-center mt-30">
        <p className="text-white font-semibold">Copyright &copy; {year} <span className="text-logo font-bold">Mirak</span>  Engineering</p>
      </div>
    </div>
  );
};

export default Footer;
