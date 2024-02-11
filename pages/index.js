import { useState } from 'react';

export default function InputPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="editText">Edit Text:</label>
      <input
        type="text"
        id="editText"
        name="editText"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
