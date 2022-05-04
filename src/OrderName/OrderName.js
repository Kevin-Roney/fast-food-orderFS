import React from 'react';

export default function OrderName({ setOrderName }) {
  return (
    <div>
      Enter Name for Order:
      <input onChange={e => setOrderName(e.target.value)}/>
    </div>
  );
}
