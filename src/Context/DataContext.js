import { createContext,useState,useEffects } from "react";

const DataContext = createContext({})


export const DataProvider = ({childern}) =>{
    return(
        <DataContext.Provider value={{}}>
            {childern}
        </DataContext.Provider>
    )
}


export default DataContext;