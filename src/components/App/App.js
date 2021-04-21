import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../Searchbar/Searchbar';
import BusinessList from '../BusinessList/BusinessList';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
