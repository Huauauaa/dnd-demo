import { Component } from 'react';
import CardItem from './CardItem';
import './App.css';

const CardList = [
  { title: 'first card', id: 1, content: 'this is first card' },
  { title: 'second card', id: 2, content: 'this is second card' },
  { title: 'third card', id: 3, content: 'this is third card' },
];

class Demo extends Component {
  state = {
    CardList,
  };
  render() {
    return (
      <div className="card">
        {CardList.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            content={item.content}
            index={index}
          ></CardItem>
        ))}
      </div>
    );
  }
}

export default Demo;
