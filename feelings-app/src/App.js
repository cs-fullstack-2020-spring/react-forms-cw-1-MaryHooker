import React from 'react';

import './App.css';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <h1>Feelings App</h1>
      {/* Call parent container */}
     <AppContainer/>
    </div>
  );
}

export default App;

// Exercise 1: Basic Form with a Stateful Component

// Create a new react*** app called feelings-app

// Create a AppContainer component to maintain shared stat

// Create a new component*** called PersonStats. In PersonStats, create a form that will allow the user to input their name, age, and how they feel right now.

// Once submitted, display the message: Hello [NAME]. Your age is [AGE] and you're feeling [FEELING] below the form. HINT: Use an inner property to update a <div>
