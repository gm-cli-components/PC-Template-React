import React from 'react';

const EllipsisText = ({ text, maxWidth }) => {
  return (
    <div
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: maxWidth,
        whiteSpace: 'nowrap',
      }}
      title={text}
    >
      {text}
    </div>
  );
};

export default EllipsisText;
