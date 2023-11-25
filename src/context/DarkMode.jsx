import {  createContext, useState } from "react";

 const DarkModeContext = createContext();

const DarkModeProvider = ({children})=>{
    const [isDark , setIsDark] = useState(false)

    return(
        <DarkModeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const Theme = DarkModeContext
export default DarkModeProvider