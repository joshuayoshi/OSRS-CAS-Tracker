import { useEffect } from 'react'
import { UsernameInput, MantineCasTable, FilterQueryInput, DifficultyFilterOptions, CheckboxFilters } from '../components/components'
import { fetchData } from '../GetSyncData'
import stateStore from '../store.jsx'
import '../testMantine.css'

const PrettyTrackerPage = () => {
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
    <div className='PrettyCasTrackerPage'>
    <>
      <h2>CAS tracker</h2>
      <UsernameInput id="" onKeyDown={({ key }) => (key === 'Enter') ? handleButtonClick() : null}
      /> &nbsp;&nbsp;
      <button onClick={handleButtonClick}>I'm a bottom!</button>
      <FilterQueryInput />
      <DifficultyFilterOptions />
      <CheckboxFilters />
      {rsnSearchButtonClicked && <p id="username-display-text"> Getting WikiSync data of {rsn}</p>}

      {/*Filters here*/}
      
      {/* {completedCasArray} */}
      <br />
      {/* {DisplayJson()} */}
    <div className='PrettyCasTable'>
      {/* <CasTable/> */}
      <MantineCasTable/>
    </div>
    </>
    </div>
  )
}

export {PrettyTrackerPage};