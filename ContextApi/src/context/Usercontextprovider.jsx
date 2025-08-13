import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    
    const value = {
        user,
        setUser
    };
    
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;