import { useState } from 'react'
import './App.css'
import jsonData from './data/cas_list.json';

function App() {
  const [count, setCount] = useState(0)

  function DisplayJson() { //eew
    return (
      <div>
        <h2>JSON Data</h2>
        <ul>
          {Object.entries(jsonData).map(([key, value]) => (
            <li key={key}>
              <h3>Entry {key}</h3>
              <ul>
                {value.map((innerValue, index) => (
                  <li key={index}>
                    <ul>
                      {innerValue.map((item, innerIndex) => (
                        <li key={innerIndex}>{item}</li>
                      ))}
                      <br />
                    </ul>
                  </li>
                ))}
                <br />
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <h2>Vite + React</h2>

      {DisplayJson()}

    </>
  )
}

export default App
