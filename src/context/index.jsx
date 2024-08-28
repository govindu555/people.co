import { createContext,useState } from "react";
export const contextdata=createContext()

const ContextPage=({children})=>{
     const [userdata,setUserdata]=useState([])

    return <contextdata.Provider value={[userdata,setUserdata]}>
        {children}
    </contextdata.Provider>
}
export default ContextPage;