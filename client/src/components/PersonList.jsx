import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const PersonList = (props) => {

    const {people, setPeople} = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/people")
            .then((res) =>{
                console.log(res.data);
                setPeople(res.data);
            })
            .catch((err)=>{
                console.log("error-> ", err);
            })
    }, [])



    return (
    <div className="container">
      <div className="row">
        {people.map((person, index) => {
          return (
            <div className="col-3 text-center" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{person.firstName} {person.lastName}</h5>
                  <Link to={`/people/${person._id}`} className="btn btn-primary">
                    {person.firstName}'s Page
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonList;