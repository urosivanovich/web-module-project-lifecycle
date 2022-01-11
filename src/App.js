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
        <User user={this.user}/>
      </form>
    </div>);
  }
}

export default App;
