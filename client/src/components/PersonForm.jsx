import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PersonForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people',{
            firstName,
            lastName
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group col-6" >
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" className="form-control" onChange = {(e)=>setLastName(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PersonForm