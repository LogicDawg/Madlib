import React, {useState} from "react";
import './MadlibsForm.css'



const MadlibForm = ({createMadLib}) => {
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [madLib, setMadLib] = useState(INITIAL_STATE)
    const [formData,setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };

    const gatherInput = (e) => {
        createMadLib(formData.noun,formData.noun2,formData.adjective,formData.color);
        e.preventDefault();
        setFormData({ noun: "", noun2: "", adjective: "", color: "" });
    };

          

    return (
        <>
        <h1>MadLibs !</h1>
        <form onSubmit={gatherInput}>
            <input
            onChange={handleChange}
            name="noun"
            value={formData.noun} 
            type="text"
            placeholder="Noun"
            />
            <input
            onChange={handleChange}
            name="noun2"
            value={formData.noun2} 
            type="text"
            placeholder="Noun"
            />
            <input
            onChange={handleChange}
            name="adjective"
            value={formData.adjective} 
            type="text"
            placeholder="Adjective"
            />
            <input
            onChange={handleChange}
            name="color"
            value={formData.color} 
            type="text"
            placeholder="Color"
            />
            <button>Submit!</button>
            
        </form>
        
        
        
        </>

    )

}

export default MadlibForm;