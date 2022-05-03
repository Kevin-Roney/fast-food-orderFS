import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ instructions }) {
  return (
    <div>
      <h2>Your Instructions:</h2>
      {
        instructions.map((instruction, i) => <Instruction key={instruction + i}>Instruction</Instruction>)
      }
    </div>
  );
}
