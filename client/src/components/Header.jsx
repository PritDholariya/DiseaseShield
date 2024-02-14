// Header.js
import { Icon } from "@iconify/react";
import IconText from "./IconText";

export default function Header({ children }) {
  return (
    <div className="h-screen w-full lg:flex">
      {/* Left panel for large screens */}
      <div className="lg:w-1/5 bg-black lg:flex-shrink-0">
        {/* Header */}
        <div className="p-6 flex items-center">
          <span className="material-symbols-outlined mr-2 text-white">cardiology</span>
          <h3 className="text-white font-semibold font-serif p-2">
            DiseaseShield
          </h3>
        </div>

        {/* Navigation links for large screens */}
        <div className="lg:block hidden">
          <IconText iconName={"material-symbols:home"} displayText={"Home"} targetLink={'/'} active />
          <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"} />
          {/* Add more navigation links as needed */}
        </div>

        {/* Language selector for large screens */}
        <div className="lg:px-5 py-3">
          <div className="border border-gray-100 text-white lg:w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2 text-sm font-semibold">
              English
            </div>
          </div>
        </div>
      </div>

      {/* Left panel for small screens */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10 lg:hidden">
        <div>
          <div className="p-6 flex items-center">
            <span className="material-symbols-outlined mr-2 text-white">cardiology</span>
            <h3 className="text-white font-semibold font-serif p-2">
              DiseaseShield
            </h3>
          </div>
          <div>
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              targetLink={'/'}
              active
            />
            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            />
            <IconText
              iconName={"icomoon-free:books"}
              displayText={"History"}
              targetLink={'/history'}
            />
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Check disease"}
            />
            <IconText
              iconName={"jam:medical"}
              targetLink={"/disease"}
              displayText={"Check from symptoms"}
            />
            <IconText
              iconName={"mdi:register"}
              displayText={"Sign Up"}
              targetLink={"/signup"}
            />
            <IconText
              iconName={"material-symbols:login-sharp"}
              displayText={"Log In"}
              targetLink={"/login"}
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

      {/* Main content */}
      <div className="lg:flex-grow">{children}</div>
    </div>
  );
}
