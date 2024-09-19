import React from 'react';

const Practise = (props) => {


    return (
        <div>
            <h1>Cv</h1>
            <h1>Profile image:</h1>
            <img width={300} src= {props.img} alt="" />
            <h1>Name: {props.name} </h1>
            <h1>Email: {props.email} </h1>
            <h1>Phone number: {props.phone} </h1>
            <h1>Skills: </h1>

            <ul>
                {
                    props.skills.map((elmt , index) =>{
                        return(
                            <li key={index}>{elmt} </li>
                        )
                    })
                }
            </ul>


            <button>{props.btn}</button>
           

           <hr />
        </div>
    );
};

export default Practise;