import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import App from './App';
import { observe } from './Game';

observe((knightPosition) =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
);

// ReactDOM.render(<App />, document.getElementById('root'));
