import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      searchField: ''
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
      then(res => res.json()).
      then(users => this.setState({ friends: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { friends, searchField } = this.state;
    const filteredFriend = friends.filter(friend =>
      friend.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Friends Rolodex</h1>
        <SearchBox placeholder='search friends' handleChange={this.handleChange} />
        <CardList friends={filteredFriend} />
      </div>
    );
  }
}

export default App;
