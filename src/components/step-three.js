import { useEffect, useState, useRef } from "react";

export default function StepThreeForm(props) {
    const [avatar, setAvatar] = useState([]);
    const avatarRef = useRef(null);
    useEffect( () => {
        if(props.data.avatar){
            setAvatar(props.data.avatar)
            console.log(avatar)
        }
            
    })
    const handlePrevious = () => {
        let currentData = props.data;
        currentData.avatar = avatar;
        props.previousStep(currentData);
    }

    const handleSubmit = () => {
        let currentData = props.data;

        currentData.avatar = avatar;
        const formData = new FormData();
        formData.append("firstName", currentData.firstName);
        formData.append("lastName", currentData.lastName);
        formData.append("name", currentData.name);
        formData.append("email", currentData.email);
        if(avatar)
            formData.append("avatar", avatar);
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        }
       

        fetch("/post", params)
        .then(res => res.json())
        .then(recipes => {
            this.setState({ recipes });
        });
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12 mb-2">
                    <label>Avatar</label>
                    <div>Current File: {avatar && avatar.name? <>{avatar.name}</>:""}</div>
                    <button className="btn btn-danger" onClick={() => {avatarRef.current.click()}}>Upload Avatar</button>
                    <input type="file" ref={avatarRef} className="form-control d-none" onChange={(e)=>{
                        setAvatar(e.target.files[0]);
                    }}></input>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-2 d-flex justify-content-end">
                    <button
                        type="button"
                        onClick={() => handlePrevious()}
                        className="btn btn-primary mx-2">Prev</button>
                    <button
                        type="button"
                        onClick={() => handleSubmit()}
                        className="btn btn-primary">Send</button>
                    
                </div>
            </div>
        </div>
    ) 
}