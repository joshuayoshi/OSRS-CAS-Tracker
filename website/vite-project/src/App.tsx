import { Link, Route } from "wouter";
import './App.css'
import {TrackerPage} from './pages/CasTrackerPage.tsx'
import HomePage from './pages/HomePage.tsx'

function App() {
  return(
    <>
      <Route path="/" component={HomePage} />
      <Route path="/CasTracker" component={TrackerPage} />
    </>
  );
}

export default App;