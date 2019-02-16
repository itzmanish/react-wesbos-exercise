import React from 'react';

const style = {
  height: '50px',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto'
};

export default function Error404() {
  return (
    <div style={style}>
      <h1>Error 404 | Not Found</h1>
    </div>
  );
}
