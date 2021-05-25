import { useState, useCallback, useEffect } from 'react';
import CardList from './CardList';
import DistList from './DistList';

const list = [
  { id: 1, content: 'aaa' },
  { id: 2, content: 'bbb' },
  { id: 3, content: 'ccc' },
  { id: 4, content: 'ddd' },
];

const ids = [];

export default function Container() {
  const [cardList, setCardList] = useState(list);

  const [distList, setDistList] = useState([]);

  const updateData = useCallback(
    (item) => {
      ids.push(item.id);
      setCardList(list.filter((i) => !ids.includes(i.id)));
      setDistList(list.filter((i) => ids.includes(i.id)));
    },
    [setCardList, setDistList]
  );

  return (
    <div className="container">
      <CardList items={cardList}></CardList>
      <DistList items={distList} updateData={updateData}></DistList>
    </div>
  );
}
