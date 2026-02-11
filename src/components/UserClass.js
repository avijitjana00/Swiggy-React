import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
                mail:"Dummy Mail",
                avatar_url:"https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            }
        }
    }
    async componentDidMount(){
        console.log("child componentDidMount");
        const data = await fetch("https://api.github.com/users/avijitjana00");
        const json = await data.json();

        this.setState({
            userInfo:json
        })

    }
    render(){
        console.log("child render");
        const { name, location, avatar_url } = this.state.userInfo;
        return(
            <div className="user-card">
            <img src={avatar_url} alt="User Avatar" />
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h3>mail:{"avijitjana002016@gmail.com"}</h3>
        </div>
        )
    }
}

export default User;