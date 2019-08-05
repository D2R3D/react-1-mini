import React, {Component} from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';


class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [],
      name: '',
      picture: '',
    }

    // bindings
    this.updateName = this.updateName.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this)
  }

    updateName(event) {
      this.setState({
        name: event.target.value
      })    
    }
    updatePicture (event) {
      this.setState({
        picture: event.target.value
    })
  }

    addFriend() {
      const newFriend =  {
        name: this.state.name,
        picture: this.state.picture 
      
    }
    const newFriendsArray = [...this.state.friends, newFriend];

    this.setState({
      friends: newFriendsArray, 
      name: '',
      picture: '',
    })
  };




  render() {

    const mappedFriends = this.state.friends.map((friend) => {
      return (
        <div>
          <img src ={friend.picture} />
          ]<span>{friend.name}</span>
        </div>
      )
    })
    return(
      <div>

        <label> Picture</label>
        <input type ="text" value={this.state.picture} onChange={this.updatePicture}/>

        <label>Name</label>
        <input type = 'text' value={this.state.name} onChange={this.updateName} />



        <button onClick={this.addFriend}> Add Friend</button>

        {mappedFriends}
      </div>
    )
  }
}
export default App;