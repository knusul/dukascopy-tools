import React from 'react';

function App() {
  return (
    <div
      onClick={() => {
        fetch('/api/historical')
          .then(d => d.json())
          .then(console.log);
      }}
    >
      Test
    </div>
  );
}

export default App;
