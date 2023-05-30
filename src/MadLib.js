import { useState } from "react";
import MadlibForm from "./MadlibsForm";

const MadLib = () => {
const [isActive,setisActive] = useState(false);
const [madLib,setMadLib] = useState()  
const reset = () => {
    setisActive(false);
}  
const createMadLib = (noun,noun2,adjective,color) => {
    setMadLib(<p>There was once a {color} {noun} that 
    loved a {adjective} {noun2}</p>);
    setisActive(true);
}
    let controller = (
        <>
        <MadlibForm createMadLib={createMadLib} />
        </>
    )

    if(isActive){
        controller = (
            <>
            {madLib}
            <button onClick={reset}>Reset Story</button>
            </>
        )
    }

    return controller;

}

export default MadLib;