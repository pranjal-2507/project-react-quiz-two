// import React from 'react';
import './App.css';
import HomeComponent from '../src/Components/HomeComponent.jsx'
 import QuizComponent from '../src/Components/QuizComponent.jsx'
 import ResultComponent from '../src/Components/Result.Component.jsx'

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent />
      <ResultComponent />
    </div>
  )
}

export default App;