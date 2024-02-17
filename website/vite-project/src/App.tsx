import { SetStateAction, useState } from 'react'
import './App.css'
import casListJson from './data/cas_list.json';
import { TextInput, CasTable } from './components/components.tsx'
import { DisplayData } from './GetSyncData.tsx'

// function DisplayJson() {
//   return (
//     <div>
//       <h2>JSON data</h2>
//       <ul>
//         <ul>
//           {Object.entries(jsonData).map(([key, value]) => (
//             <li key={key}>
//               <h3>Entry {key}</h3>
//               <ul>
//                 {value.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </ul>
//     </div>
//   );
// }

function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false); // State to track if the button is clicked
  const [clickCount, setClickCount] = useState(0); // State to track if the button is clicked
  // const [count, setCount] = useState(0)

  const handleInputChange = (value: string) => {
    setInputText(value);
  };
  
  const handleButtonClick = () => {
    setDisplayText(inputText);
    setClickCount(clickCount + 1);
    setButtonClicked(true); // Update state to indicate the button is clicked
  };
  
  let completedCasArray = DisplayData( {inputText, clickCount} );

  return (
    <>
      <h2>CAS tracker</h2>
      <TextInput id="" onInputChange={handleInputChange} 
      onKeyDown={({ key }) => (key === 'Enter') ? handleButtonClick() : null}
      
      /> &nbsp;&nbsp;
      <button onClick={handleButtonClick}>I'm a bottom!</button>
      {buttonClicked && <p id="username-display-text"> Getting WikiSync data of {displayText}</p>}

      {/*Filters here*/}
      
      {/* <DisplayData rsn={inputText} clickCount={clickCount}/> */}
      {/* {completedCasArray} */}
      <br />
      {/* {DisplayJson()} */}

      <CasTable casListJson={casListJson} completedCasArray={completedCasArray} />
    </>
  )
}

export default App
