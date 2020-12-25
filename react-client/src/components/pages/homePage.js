import React, { useState } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Home page
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>
          Increment count
        </button>
      </div>
    </div>
  );
}

export default HomePage;