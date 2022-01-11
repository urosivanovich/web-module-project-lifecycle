import axios from 'axios';
import React from 'react';
import User from './components/User';

class App extends React.Component {

  state = {
    user: [],
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/urosivanovich").then(resp=>{
      console.log(resp);
      this.setState({
        ...this.state, 
        user: resp.data
      })
    })
    .catch(err => console.log(err))
  }


  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input />
        <button>Search</button>
        <br></br>
        <img width="75" src={this.state.user.avatar_url} />
            <p>{this.state.user.name}</p>
            <p>Total Repos: {this.state.user.public_repos}</p>
            <p>Total Followers: {this.state.user.followers}</p>
            <h4>Followers</h4>
      </form>
    </div>);
  }
}

export default App;
