import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [theme, setTheme] = useState(true);
    const [menu, setMenu] = useState(true);

    return(
        <AuthContext.Provider value={{ theme, setTheme, menu, setMenu }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;