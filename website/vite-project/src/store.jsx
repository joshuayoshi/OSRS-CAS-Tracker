import { create } from 'zustand'

//Creates a store for me to use
//stateStore is the state, functions change the state

const stateStore = create((set, get) => ({
  rsn: '',
  completedCasArray: [],
  rsnSearchButtonClicked: false,
  rsnUpdateCount: 0,
  filterQuery: '',
  difficultyFilterArray: [],
  completedCheckbox: true,
  notCompletedCheckbox: true,
  
  //rsn functions
  changeRSN: (rsn) => {
    //What this is doing is it's setting the state with the attribute rsn = rsn
    set({ rsn }) 
  },
  //rsnUpdateCount
  incrementRsnUpdateCount: () => {
    set({rsnUpdateCount : get().rsnUpdateCount + 1})
  },
  //completedCasArray functions
  setCompletedCasArray: (completedCasArray) => {
    set({completedCasArray})
  },
  //rsnButtonClicked functions
  setRsnSearchButtonClicked: (rsnSearchButtonClicked) => {
    set({rsnSearchButtonClicked})
  },
  //filterQuery functions
  changeFilterQuery: (filterQuery) => {
    set({ filterQuery }) 
  },
  //filter selection functions
  changedifficultyFilterArray: (difficultyFilterArray) => {
    set({difficultyFilterArray})
  },
  //Checkbox filter options
  changeCompletedCheckbox: (completedCheckbox) => {
    set({completedCheckbox})
  },
  changeNotCompletedCheckbox: (notCompletedCheckbox) => {
    set({notCompletedCheckbox})
  },


}))

export default stateStore;
