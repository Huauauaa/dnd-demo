import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { observe } from './chess/Game';
import Board from './chess/Board';

observe((knightPosition) =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
);

// ReactDOM.render(<App />, document.getElementById('root'));
