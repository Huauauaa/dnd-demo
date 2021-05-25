import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

export default function CardItem({ content, id, hideSourceOnDrag = true }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id]
  );

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} className="card-item">
      {content}
    </div>
  );
}
