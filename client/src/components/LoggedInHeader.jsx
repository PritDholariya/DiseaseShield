
import React, { useState ,useEffect} from "react";
import { Icon } from "@iconify/react";
import IconText from "./IconText";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { Link , useNavigate} from "react-router-dom";


export default function LoggedInHeader({ children, curActiveScreen, setisAuthenticated }) {

  const [isloading, setisloading] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    setisloading(false);
  }, []);

  const handleLogout = async (e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setisAuthenticated(null);
    navigate("/")
  };

  // const { user, setUser } = useContext(UserContext);

  // // State to store user data
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const accessToken = localStorage.getItem("token");
  //       const response = await axios.get("http://localhost:8000/api/user", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       setUserData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  
  //   fetchUserData();
  // }, []);
  

  return (
    <>
    
    {isloading && <p>loading..</p>}

      {!isloading && <div className="h-screen w-full flex ">
        {/* This first div will be the left panel */}
        <div className="h-full w-1/5  bg-black flex flex-col justify-between pb-10">
          <div>
            {/* This div is for logo */}
            <Link to={'/'}>
          <div className="p-6 flex items-center">
            <span className="material-symbols-outlined mr-2 text-white">cardiology</span>
            <h3 className="text-white font-semibold font-serif p-2">
              DiseaseShield
            </h3>
          </div>
            </Link>
          <div className="flex items-center px-6">
            <img
              src={user?.profile_image || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser&psig=AOvVaw1TuGQk3B9MTUryyeIkkecc&ust=1708662981253000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMC47N6PvoQDFQAAAAAdAAAAABAE"}
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-2 text-white">{user?.username || "user"}</div>
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              targetLink={'/'}
              active={curActiveScreen === "home"}

            />
            {/* <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            /> */}
            <IconText
              iconName={"icomoon-free:books"}
              displayText={"History   "}
              targetLink={'/history'}
              active={curActiveScreen === "history"}

            />
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Disease Lookup"}
              targetLink={"/disease"}
              active={curActiveScreen === "disease"}

              />
              <IconText
                iconName={"jam:medical"}
                displayText={"SymptoScan"}
                targetLink={"/symtoms"}
                active={curActiveScreen === "symtoms"}

              />

            <IconText
              iconName={"material-symbols:logout"}
              displayText={"Logout"}
              onClick={handleLogout}
              targetLink={"/"}
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
      </div>}
    </>

  );
}
