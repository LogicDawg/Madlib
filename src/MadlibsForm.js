import React, {useState} from "react";
import './MadlibsForm.css'


const MadlibForm = ({createMadLib}) => {
    // Set Form with empty fields
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    //Form data state management
    const [formData,setFormData] = useState(INITIAL_STATE);
    //Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };
      // Handle submit button, and gather field information.
    const gatherInput = (e) => {
        e.preventDefault();
        createMadLib(noun,noun2,adjective,color);
        setFormData({ noun: "", noun2: "", adjective: "", color: "" });
    };

    //Deconstructing formData object.
    const {noun,noun2,adjective,color} = formData;
          

    return (
        <>
        <h1>MadLibs !</h1>
        <form onSubmit={gatherInput}>
            <input
            onChange={handleChange}
            name="noun"
            value={noun} 
            type="text"
            placeholder="Noun"
            />
            <input
            onChange={handleChange}
            name="noun2"
            value={noun2} 
            type="text"
            placeholder="Noun"
            />
            <input
            onChange={handleChange}
            name="adjective"
            value={adjective} 
            type="text"
            placeholder="Adjective"
            />
            <input
            onChange={handleChange}
            name="color"
            value={color} 
            type="text"
            placeholder="Color"
            />
            <button>Get Story!</button>           
        </form>     
        </>

    )

}

export default MadlibForm;