import React from "react";

class User extends React.Component {
    
    render(){
        
        return (
        <div>
            <img width="75" src={this.props.state.user.avatar_url} />
            <p>{this.props.state.user.name}</p>
            <p>Total Repos: {this.props.state.user.public_repos}</p>
            <p>Total Followers: {this.props.state.user.followers}</p>
            <h4>Followers</h4>
        </div>
        )
    }


}

export default User;