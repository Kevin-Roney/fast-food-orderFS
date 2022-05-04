import React from 'react';

export default function InstructionForm({ instructionInput, setInstructionInput, handleSubmit }) {
  return (
    <div>
      <form className='instruction-form' onSubmit={handleSubmit}>
        Any special instructions?
        <input value={instructionInput} onChange={e => setInstructionInput(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
}
