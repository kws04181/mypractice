import { useState } from 'react';

function App() {
  const [minutes, setMinutes] = useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => setMinutes(0);
  return (
    <div className="App">
      <h1 className='hi'>Super Converter</h1>
      <div>
        <label htmlFor='minutes'>Minutes:</label>
        <input
          value={minutes}
          id='minutes'
          placeholder='Minutes'
          type="number"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor='hours'>Hours:</label>
        <input
          value={Math.round(minutes / 60)}
          id='hours'
          placeholder='Hours'
          type="number"
          disabled
        />
      </div>
      <button onClick={reset}>Reset</button>
    </div >
  );
}

export default App;
