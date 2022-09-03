import { useEffect, useState, Fragment } from "react";
import validator from 'validator';

export default function StepTwoForm(props) {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if(props.data && props.data.email)
            setEmail(props.data.email)
    }, []);

    const handleNext = () => {
        let currentData = props.data
        currentData.email = email;
        if(validate()) {
            props.nextStep(currentData);
        }
    }
    const handlePrevious = () => {
        let currentData = props.data;
        currentData.email = email;
        props.previousStep(currentData);
    }

    const validate = () => {
        let result = true;
        if(!validator.isEmail(email)) {
            alert('Please inser valida email')
            result = false;
        }

        return result;
    }
    return (
        <div>
            <div className="row mb-2">
                <div className="col-md-12">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-12">
                    <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        onClick={() => handlePrevious()}
                        className="btn btn-primary mx-2">Prev</button>
                    <button type="button" className="btn btn-primary" onClick={()=> {handleNext()}}>Next</button>
                    
                    </div>
                </div>
            </div>
        </div>
    ) 
}