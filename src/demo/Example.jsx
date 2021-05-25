import { memo } from 'react';
import '../App.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Container from './Container';

const Example = memo(function () {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container></Container>
    </DndProvider>
  );
});

export default Example;
