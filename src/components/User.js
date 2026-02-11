import { useState } from "react";

const User = (props)=>{
    const [variable,setVariable] = useState("This is a state variable1 - functional component");
    const [variable2,setVariable2] = useState("This is a state variable2 - functional component");
    const {name,designation,mail} = props;
    return(
        <div className="user-card">
            <h4>{variable}</h4>
            <h4>{variable2}</h4>
            <h1>{name}</h1>
            <h2>{designation}</h2>
            <h3>mail:{mail}</h3>
        </div>
    )
}

export default User;