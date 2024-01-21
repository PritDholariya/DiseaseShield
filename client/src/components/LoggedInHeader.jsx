
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import IconText from "./IconText";

export default function LoggedInHeader({children}) {
  return (
    <div className="h-full w-full flex">
      {/* This first div will be the left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          {/* This div is for logo */}
          <div className="p-6 flex items-center">
            <span className="material-symbols-outlined mr-2 text-white">cardiology</span>
            <h3 className="text-white font-semibold font-serif p-2">
              DiseaseShield
            </h3>
          </div>
          <div className="flex items-center px-6">
            <img
              src="https://example.com/user-profile.jpg"
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-2 text-white">Username</div>
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            />
            <IconText
              iconName={"icomoon-free:books"}
              displayText={"History   "}
            />
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Check disease"}
              />
            <IconText
              iconName={"jam:medical"}
              displayText={"Check from symptoms"}
              />
            
            </div>
        </div>
       <div className="mt-64">
       <IconText
              iconName={"material-symbols:logout"}
              displayText={"Logout"}
            />
       </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2 text-sm font-semibold">
              English
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
