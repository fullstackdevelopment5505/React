import { useEffect, useState, Fragment } from "react";

export default function StepOneForm(props) {
    const [name, setName] = useState(""); 
    const [data, setData] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        if(props.data) {
            setData(props.data);
            setName(props.data.name);
            setFirstName(props.data.firstName);
            setLastName(props.data.lastName);
        }
        
    })
    const handleNext = () => {
        let currentData = data;
        currentData.name = name;
        currentData.firstName = firstName;
        currentData.lastName = lastName;
        if(validate()) {
            props.nextStep(currentData);
        }
    }

    const validate = () => {
        let result = true;
        if(name == "") {
            result = false;
            alert("Name field is required.");
        }
        if(firstName == "") {
            result = false;
            alert("First Name field is required.");
        }
        if(lastName == "") {
            alert("Last Name field is required.");
            result = false;
        }

        return result;
    }
    return (
        <div>
        <form>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        className="form-control"
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="col-md-6">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="first_name"
                        className="form-control"
                        value={firstName} 
                        onChange={(e)=>{setFirstName(e.target.value)}} />
                </div>
                
                <div className="col-md-6">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        name="last_name"
                        className="form-control"
                        value={lastName} 
                        onChange={(e)=>{setLastName(e.target.value)}} />
                </div>
            </div>
            <div className="d-flex justify-content-end">
            <button type="button" onClick={()=>handleNext()}className="btn btn-primary">Next</button>
            </div>
            
        </form>
    </div>
    ) 
}