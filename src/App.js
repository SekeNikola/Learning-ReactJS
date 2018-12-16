import React, { Component } from 'react';
import './App.css';
// ============ DRUGI DEO =========
import faker from 'faker'
import Comments from './components/Comments'
import ApprovelCard from './components/ApprovelCard';
// ============PRVI DEO============
// const buttonText = {text: 'Click me'};
// const labelText = "Type text here"
// function clickedMe(){
//   alert('You clicked me')
// }

// ==========DRUGI DEO==============
class App extends Component {
  render() {
    return (
      <div className="App-header">
        {/* ============PRVI DEO============
          <header className="App-header">
          <h1>Welcome</h1>
          <label htmlFor="name">{labelText}</label>
          <input type="text" placeholder="Type text"/>
          <button onClick={clickedMe}>{buttonText.text}</button>
        </header> */}

        {/* ============DRUGI DEO ===========*/}
        <div className="ui container comments">

        <ApprovelCard>
        <Comments author="Sam" timeAgo="Today at 4" comment="Very nice post" image={faker.image.avatar()}/>
        </ApprovelCard>

        <ApprovelCard>
        <Comments author="Alex" timeAgo="Today at 6" comment="Very nice post" image={faker.image.avatar()}/>
        </ApprovelCard>

        <ApprovelCard>
        <Comments author="Jane" timeAgo="Yesterday at 4" comment="Very nice post" image={faker.image.avatar()}/>
        </ApprovelCard>

        
        </div>
      </div>
    );
  }
}

export default App;
