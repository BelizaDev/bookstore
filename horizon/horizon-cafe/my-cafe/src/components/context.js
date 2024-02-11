import {useState, createContext} from 'react';
import {servicedata} from "../data"

// const service = servicedata;
export const HorizonContext = createContext();

export const HorizonProvider = (props) => {
    const [service, setService] = useState(servicedata);
    return(
        <HorizonContext.Provider value={{service, setService}}>
            {props.children}
        </HorizonContext.Provider>
    )
}