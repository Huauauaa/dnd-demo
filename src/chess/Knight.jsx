import { ItemTypes } from '../ItemTypes';
import { useDrag, DragPreviewImage } from 'react-dnd';
import knightImage from './head.png';

export default function Knight() {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <span
        ref={drag}
        style={{
          fontSize: '50px',
          opacity: isDragging ? 0.5 : 1,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </span>
    </>
  );
}
