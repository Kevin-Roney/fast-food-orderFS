import React from 'react';

export default function OrderDropdowns({ setFoodId, setSideId, setDrinkId }) {
  return (
    <section className='dropdown'>
      <div className='dropdown-item'>
        Select a food item:
        <select onChange={(e) => setFoodId(e.target.value)}>
          <option value={1}>Ramen</option>
          <option value={2}>Pad Thai</option>
          <option value={3}>Paella</option>
        </select>
      </div>
      <div className='dropdown-item'>
        Select a side item:
        <select onChange={(e) => setSideId(e.target.value)}>
          <option value={1}>Edamame</option>
          <option value={2}>Salad Rolls</option>
          <option value={3}>Fries</option>
        </select>
      </div>
      <div className='dropdown-item'>
        Select a drink item:
        <select onChange={(e) => setDrinkId(e.target.value)}>
          <option value={1}>Mint Julep</option>
          <option value={2}>Moscow Mule</option>
          <option value={3}>Wine</option>
        </select>
      </div>
    </section>
  );
}
