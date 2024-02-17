import { SetStateAction, useEffect, useState } from 'react'
import './App.css'
import casListJson from './data/cas_list.json';
import { TextInput, CasTable } from './components/components.tsx'
import { fetchData } from './GetSyncData.tsx'
import stateStore from './store';

function App() {
  //stateStore
  const {rsn, setRsnSearchButtonClicked, rsnSearchButtonClicked, setCompletedCasArray,
     incrementRsnUpdateCount, rsnUpdateCount} = stateStore();
  
  const handleButtonClick = () => {
    setRsnSearchButtonClicked(true);
    incrementRsnUpdateCount();
  };
  
  //useEffect should prevent it from infinitely reloading
  useEffect( () => {
    if(rsn != '') fetchData(rsn, setCompletedCasArray);
  }, [rsnUpdateCount] ); //Everything in these brackets is what useEffect checks to know when to recall

  return (
    <>
      <h2>CAS tracker</h2>
      <TextInput id="" onKeyDown={({ key }) => (key === 'Enter') ? handleButtonClick() : null}
      /> &nbsp;&nbsp;
      <button onClick={handleButtonClick}>I'm a bottom!</button>
      {rsnSearchButtonClicked && <p id="username-display-text"> Getting WikiSync data of {rsn}</p>}

      {/*Filters here*/}
      
      {/* {completedCasArray} */}
      <br />
      {/* {DisplayJson()} */}

      <CasTable casListJson={casListJson} />
    </>
  )
}

export default App
