import { Link, Route } from "wouter";
import './App.css'
import {TrackerPage} from './pages/CasTrackerPage.tsx'
import {PrettyTrackerPage} from './pages/PrettyCasTrackerPage.tsx'
import HomePage from './pages/HomePage.tsx'
// import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';
// import './testMantine.css';

function App() {
  return(
    <>
      <div className="App">
      <Route path="/" component={HomePage} />
      <Route path="/CasTracker" component={TrackerPage} />
      </div>
      <Route path="/PrettyCasTracker" component={PrettyTrackerPage} />
    </>
  );
}

export default App;