import React, { useState } from 'react';

// class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         Home page
//       </div>
//     )
//   }
// }

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