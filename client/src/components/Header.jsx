
import { Icon } from "@iconify/react";
import IconText from "./IconText";

export default function Header({children}) {

  return (
    <div className="h-screen w-full flex">
      {/* This first div will be the left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
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
              iconName={"icomoon-free:books"}
              displayText={"History"}
              targetLink={'/history'}
            />
            <IconText
              iconName={"material-symbols:add-box"}
              targetLink={"/disease"}
              displayText={"Disease Lookup"}
            />
            <IconText
              iconName={"jam:medical"}
              targetLink={"/symtoms"}
              displayText={"SymptoScan"}
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
      {children}
    </div>
  );
}