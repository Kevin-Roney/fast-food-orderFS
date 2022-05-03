import OrderName from './OrderName/OrderName';
import OrderImages from './OrderImages/OrderImages';
import OrderDropdowns from './OrderImages/OrderDropdowns';
import InstructionForm from './Instructions/InstructionForm';
import InstructionList from './Instructions/InstructionList';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='order-name'>
        <OrderName />
        <h2>Order for: {orderName}</h2>
      </section>
      <section className='order-images'>
        <OrderImages />
      </section>
      <section className='order-dropdowns'>
        <OrderDropdowns />
      </section>
      <section className='instructions-input'>
        <InstructionForm />
      </section>
      <section className='instructions-list'>
        <InstructionList />
      </section>
    </div>
  );
}

export default App;
