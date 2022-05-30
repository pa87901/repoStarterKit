import React, { useState } from 'react';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h1 className="centered">Home page</h1>
      <div>
        This is a simple div to show how React states can work in React Hooks. Feel free to remove this div when building your personal home page.
        <div>
          Count: {count}
          <div>
            <button onClick={() => setCount(count + 1)}>
              Increment count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
