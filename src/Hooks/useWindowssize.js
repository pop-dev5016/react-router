import { useState,useEffect } from "react";

import React from 'react'

const useWindowssize = () => {
    const [windowssize,setWindowsSize] = useState({width:undefined,height:undefined})
    

    useEffect(()=>{
        
      const handleResize = ()=>{
        setWindowsSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
      }
       
      handleResize()

      window.addEventListener("resize",handleResize)

      const cleanUp = ()=>{
        console.log("runs if a useeffect dep changes");
        window.removeEventListener("resize",handleResize)
      }
      return cleanUp
    },[])

    return windowssize
}

export default useWindowssize
