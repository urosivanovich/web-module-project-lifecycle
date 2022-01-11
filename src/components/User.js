import React from "react";

class User extends React.Component {
    
    render(){
        
        return (
        <div>
            <img width="75" src={this.props.user.avatar_url} />
            <p>{this.props.user.name}</p>
            <p>Total Repos: {this.props.user.public_repos}</p>
            <p>Total Followers: {this.props.user.followers}</p>
            <h4>Followers</h4>
        </div>
        )
    }


}

export default User;