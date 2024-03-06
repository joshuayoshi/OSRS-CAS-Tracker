import { useEffect } from 'react'
import { UsernameInput, MantineCasTable, FilterQueryInput, DifficultyFilterOptions, CheckboxFilters } from '../components/components'
import { fetchData } from '../GetSyncData'
import stateStore from '../store.jsx'
import '../testMantine.css'

const TrackerPage = () => {
  //stateStore
  const {rsn, setRsnSearchButtonClicked, rsnSearchButtonClicked, setCompletedCasArray,
     incrementRsnUpdateCount, rsnUpdateCount, completedCasArray, lastSearchedForRSNThatSucceeded, changeLastSearchedForRSNThatSucceeded} = stateStore();
  
  let completedCasCount = completedCasArray.length;

  const handleButtonClick = () => {
    setRsnSearchButtonClicked(true);
    incrementRsnUpdateCount();
  };
  
  //useEffect should prevent it from infinitely reloading
  useEffect( () => {
    if(rsn != '') fetchData(rsn, setCompletedCasArray, changeLastSearchedForRSNThatSucceeded);
  }, [rsnUpdateCount] ); //Everything in these brackets is what useEffect checks to know when to recall

  return (
    <div className='CasTrackerPage'>
    <>
      <h2>CAS tracker</h2>
      <UsernameInput id="" onKeyDown={({ key }) => (key === 'Enter') ? handleButtonClick() : null}
      /> &nbsp;&nbsp;
      <button onClick={handleButtonClick}>Search</button>
      <FilterQueryInput />
      <DifficultyFilterOptions />
      <CheckboxFilters />
      {rsnSearchButtonClicked && <p id="username-display-text"> Getting WikiSync data of {lastSearchedForRSNThatSucceeded}</p>}
      <p>Completed: {completedCasCount} / 526</p>

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

export {TrackerPage};