import { useState } from 'react';

function Counter() {
  // State to track the count
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        borderRadius: '8px'
      }}
    >
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Current Count: {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
