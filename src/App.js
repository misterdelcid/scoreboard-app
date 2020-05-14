import React from 'react';
import TimeAndTeamInfo from './components/TimeAndTeamInfo'
import Score from './components/Score'
import Substitutions from './components/Substitutions'
import TimeButtons from './components/TimeButtons'
import './styles/App.scss';

const App = () => (
  <div className="App">
    <div className="container">
      <TimeAndTeamInfo />
      <Score />
      <Substitutions />
      <TimeButtons />
      <div className="app-title">
        <h1>Soccer Scoreboard App</h1>
      </div>
    </div>
  </div>
);

export default App;
