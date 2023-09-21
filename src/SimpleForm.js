import React, { useState } from 'react';
import './DataForm.css'; 

function SimpleForm() {
 
  const [text, setText] = useState('');
  const [date, setDate] = useState('');


  const handleTextChange = (e) => {
    setText(e.target.value);
  };


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Text:', text);
    console.log('Date:', date);
  };

  return (
    <div className="form-container">
      <h2>Transform Past Data</h2>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label htmlFor="text">Resource Id</label>
          <input
            type="number"
            id="text"
            value={text}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SimpleForm;
