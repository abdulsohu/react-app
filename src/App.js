import React from 'react';

function App() {
  const sayHello = () => {
    console.log('Hello World!')
  }

  return (
    <div>
      <h1>
        Hello World!
      </h1>
      <button onClick={sayHello}>
        Hello World!
      </button>
    </div>
  )

}

export default App;