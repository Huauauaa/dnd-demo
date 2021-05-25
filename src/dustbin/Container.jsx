import { memo } from 'react';
import Dustbin from './Dustbin';
import Box from './Box';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Container = memo(function () {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    </DndProvider>
  );
});

export default Container;
