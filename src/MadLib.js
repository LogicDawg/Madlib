import { useState } from "react";
import MadlibForm from "./MadlibsForm";

const MadLib = () => {
    //create state for removing form and adding story.
const [isActive,setisActive] = useState(false);
    //create state for madlib
const [madLib,setMadLib] = useState()
    //reset story, and form.
const reset = () => {
    setisActive(false);
}  
    //creating madlib based off formData passed up from form.
const createMadLib = (noun,noun2,adjective,color) => {
    setMadLib(<p>There was once a {color} {noun} that 
    loved a {adjective} {noun2}</p>);
    setisActive(true);
}
    // Logic to control whether form or story is shown.
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