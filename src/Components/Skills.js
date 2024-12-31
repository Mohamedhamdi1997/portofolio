import React from "react";
import "./../assets";
import { skill } from "../assets";
import { AppText, skillsList, workDetail } from "../constants";
import "../constants";

const Skills = () => {
  return (
    <div className="mt-10" id="skills">
      <div className="flex flex-row justify-center items-center">
        <img src={skill} className="w-[70px] hover:animate-bounce " />
        <h1 className="text-[40px] font-bold">
          {AppText.Skills}
          <span className="text-purple-600">{AppText.Experties}</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 ">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8  items-center">
          {skillsList.map((item, index) => (
            <div
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            >
              <img src={item.icon} className="w-[60px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
