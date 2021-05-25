import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import CardItem from './CardItem';

export default function DistList({ items = [], updateData }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      updateData(item);
      return { name: 'Dist' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <div ref={drop} role={'Dist'} className="dist-list">
      {items.map((item, index) => (
        <CardItem key={index} {...item}>
          {item.content}
        </CardItem>
      ))}
      <div>{isActive ? 'Release to drop' : 'Drag a box here'}</div>
    </div>
  );
}
