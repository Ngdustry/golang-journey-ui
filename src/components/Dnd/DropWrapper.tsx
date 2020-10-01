import React, { FC } from 'react';

import { useDrop } from 'shared/libs';
import { ItemTypes } from 'shared/types';
import { handleDrop } from 'shared/utils/Dnd';

interface DropWrapperProps {
  target: string;
}

export const DropWrapper: FC<DropWrapperProps> = ({ target, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: item =>
      handleDrop({
        ...item,
        target
      }),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  const style = {
    opacity: isOver ? 0.5 : 1
  };

  return (
    <div ref={drop} style={style}>
      {children}
    </div>
  );
};
