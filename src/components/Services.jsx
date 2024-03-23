import { useState } from "react";
import Header from "./Header";
const Services = () => {
  const [index, setIndex] = useState(0);
  return (
    <div id="services" className=" flex flex-col w-full px-7">
      <Header title="Services"/>
      <div>
        <ul className="flex w-full md:px-16">
          <li
            className={`${
              index == 0 ? "bg-logo text-white hover:bg-sky-800" : ""
            } cursor-pointer w-full h-10 p-1 border flex items-center text-sm md:text-[14px] justify-center mx-3 rounded-sm hover:bg-gray-100`}
            onClick={() => setIndex(0)}
          >
            Supply
          </li>
          <li
            className={`${
              index == 1 ? "bg-logo text-white hover:bg-sky-800" : ""
            } cursor-pointer w-full h-10 p-1 border flex text-sm items-center md:text-[14px] justify-center mx-3 rounded-sm hover:bg-gray-100`}
            onClick={() => setIndex(1)}
          >
            Installation
          </li>
          <li
            className={`${
              index == 2 ? "bg-logo text-white hover:bg-sky-800" : ""
            } cursor-pointer w-full h-10 p-1 border flex text-sm items-center md:text-[14px] justify-center mx-3 rounded-sm hover:bg-gray-100`}
            onClick={() => setIndex(2)}
          >
            Training
          </li>
          <li
            className={`${
              index == 3 ? "bg-logo text-white hover:bg-sky-800" : ""
            } cursor-pointer w-full h-10 p-1 border flex text-sm items-center md:text-[14px] justify-center mx-3 rounded-sm hover:bg-gray-100`}
            onClick={() => setIndex(3)}
          >
            Agency
          </li>
        </ul>
        {index == 0 && (
          <div className="p-10">
            <h1 className="text-xl font-extrabold mb-3">Supply</h1>
            <p className="text-md">
              The company supplies its clients with world class products from
              different countries. Because we have support staff in different
              part of the world we are able to supply different first-rate
              products to our clients. The products we supply mainly are HVAC
              and firefighting equipment’s.
            </p>
          </div>
        )}
        {index == 1 && (
          <div className="p-10">
            <h1 className="text-xl font-extrabold mb-3">
              Installation and Commissioning{" "}
            </h1>
            <p className="text-md">
              The company provides its clients with the most experienced Project
              Specific Site Supervisors and Project Managers who will manage and
              control faultless and schedule-specific onsite installations. Site
              teams are backed by highly skilled administrative staff to ensure
              that, for each project, a seamless installation is executed by a
              tailor-made team.
            </p>
          </div>
        )}

        {index == 2 && (
          <div className="p-10">
            <h1 className="text-xl font-extrabold mb-3">Training</h1>
            <p className="text-md">
              Mirak will provide the following training after commissioning:
            </p>
            <ul className="ml-8">
              <li className=" list-disc">
                Onsite training prior to final system acceptance.
              </li>
              <li className=" list-disc">
                Training shall include the operation, maintenance and management
                of all Systems.
              </li>
              <li className=" list-disc">
                Training shall be conducted by a suitability qualified engineer
                and where necessary an employee of the manufacturer.
              </li>
            </ul>
          </div>
        )}

        {index == 3 && (
          <div className="p-10">
            <h1 className="text-xl font-extrabold mb-3">Agency</h1>
            <p className="text-md">
              Mirak Provides agency service for international companies on
              exclusive basis and also on project basis. We facilitate and
              assist the international companies in dealing with government and
              private office and provide up to date and relevant government
              policies, regulations and procedure for foreign companies
              investment and tender participation. Further through our expert
              pool of stuffs we provide assistance in the tender document
              preparation, both technical and financial submittal.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
