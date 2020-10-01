import React, { FC } from 'react';

import { useDrag } from 'shared/libs';
import { ItemTypes } from 'shared/types';

interface DragWrapperProps {
  task: any;
}

export const DragWrapper: FC<DragWrapperProps> = ({ task, children }) => {
  const [, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      ...task
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return <div ref={drag}>{children}</div>;
};
