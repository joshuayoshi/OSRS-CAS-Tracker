import { Link, Route } from "wouter";
import './App.css'
import {TrackerPage} from './pages/CasTrackerPage.tsx'
import HomePage from './pages/HomePage.tsx'
// import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';

function App() {
  return(
    <>
      <div className="App">
      <Route path="/" component={HomePage} />
      </div>
      <Route path="/CasTracker" component={TrackerPage} />
    </>
  );
}

export default App;