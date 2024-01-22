import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("context file");

        // const fetchUserProfile = async () => {
        //     try {
        //         const accessToken = localStorage.getItem("token");

        //         if (accessToken) {
        //             const response = await axios.get('http://localhost:8000/api/profile/', {
        //                 headers: {
        //                     // Authorization: `Bearer ${accessToken}`,
        //                     Authorization:`Bearer ${localStorage.getItem('token')}`,
        //                 },
        //                 withCredentials: true,
        //             });

        //             const userData = response.data;
        //             setUser(userData);
        //             console.log(userData);
        //         }
        //     } catch (error) {
        //         console.error("Error fetching user profile:", error);
        //     }
        // };

        // // Use an empty dependency array to make sure this effect runs only once
        // if (!user) {
        //     fetchUserProfile();
        // }
    }, []); // Empty dependency array

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
