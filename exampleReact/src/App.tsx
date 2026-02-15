import { useState } from 'react';

import './App.css';
import Example from './Example';
import ReactLogo from './ReactLogo';
import ViteLogo from './ViteLogo';
// eslint-disable-next-line import/no-unresolved
import viteLogoSource from '/vite.svg';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ReactLogo />

        <ViteLogo src={viteLogoSource} />
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button
          type="button"
          onClick={() => {
            setCount((currentCount) => {
              return currentCount + 1;
            });
          }}
        >
          count is {count}
        </button>

        <Example />
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
