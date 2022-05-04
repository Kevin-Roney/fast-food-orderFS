import OrderName from './OrderName/OrderName';
import OrderImages from './OrderImages/OrderImages';
import OrderDropdowns from './OrderImages/OrderDropdowns';
import InstructionForm from './Instructions/InstructionForm';
import InstructionList from './Instructions/InstructionList';
import './App.css';
import { useState } from 'react';

function App() {
  //OrderName state
  const [orderName, setOrderName] = useState('Customer Name');
  //OrderImages state
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  // //Instruction state
  const [instructions, setInstructions] = useState(['']);
  const [instructionInput, setInstructionInput] = useState('');
  // submit function for InstructionForm
  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  }
  return (
    <div className="App">
      <h1>The Worlds Nicest Fast Food!</h1>
      <div className='components'>
        <section className='order-name'>
          <OrderName 
            setOrderName={setOrderName}
          />
          <h2>Order for: {orderName}</h2>
        </section>
        <section className='order-images'>
          <OrderImages 
            foodId={foodId}
            sideId={sideId}
            drinkId={drinkId}
          />
        </section>
        <section className='order-dropdowns'>
          <OrderDropdowns 
            setFoodId={setFoodId}
            setSideId={setSideId}
            setDrinkId={setDrinkId}
          />
        </section>
        <section className='instructions-input'>
          <InstructionForm 
            instructionInput={instructionInput}
            setInstructionInput={setInstructionInput}
            handleSubmit={handleSubmit}
          />
        </section>
        <section className='instructions-list'>
          <InstructionList 
            instructions={instructions}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
