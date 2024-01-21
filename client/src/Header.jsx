// Header.js

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import IconText from "./components/IconText";
import TextWithHover from "./components/TextWithHover";
import logo from "./assets/logo.jpg";

export default function Header() {

  return (
    <div className="h-full w-full flex">
      {/* This first div will be the left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          {/* This div is for logo */}
          <div className="p-6 flex items-center">
            <img
              src={logo}
              alt="DiseaseShield Logo"
              className="h-10 w-10"
            />
            <h3 className="text-white font-semibold font-serif p-2">
              DiseaseShield
            </h3>
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
          </div>
          <div className="pt-5">
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
        <div className="text-white font-extrabold w-full">
                <div className="py-3">
                    <IconText
                        iconName={"mdi:register"}
                        displayText={"Sign Up"}
                    />
                </div>
                <div>
                <IconText
                    iconName={"material-symbols:login-sharp"}
                    displayText={"Log In"}
                />                
                </div>
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
    </div>
  );
}
