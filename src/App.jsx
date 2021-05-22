import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {
  return <Board knightPosition={[7, 4]}></Board>;
}

export default App;
