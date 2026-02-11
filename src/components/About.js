import User from "./User";
import UserClass from "./UserClass";
import React from "react";                                                                                                                                    


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentDidMount");
    }

    render(){
        console.log("parent render");
        return (
            <div className="about">
                <h1>About Us</h1>
                <p>This is the About page of our Swiggy React app.</p>
                {/* <User 
                name="Avijit Jana - functional component" 
                designation = "Software Engineer | NodeJs Developer | React Developer"
                mail = "avijitjana002016@gmail.com"/> */}
                <UserClass />
            </div>
        )
    }
}

export default About;