import { useState } from "react";
import MadlibForm from "./MadlibsForm";

const MadLib = () => {
const INITIAL_STATE = {
        noun: "x",
        noun2: "x",
        adjective: "x",
        color: "x"
    }
const [madLib,setMadLib] = useState()    
const createMadLib = (noun,noun2,adjective,color) => {
    setMadLib(<p>There was once a {color}{noun} that loved a 
        {adjective} {noun2}</p>)
}

    return (
        <>
        <MadlibForm createMadLib={createMadLib} />
        {madLib}
        </>
    )
}

export default MadLib;