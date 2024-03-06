import { Link, Route } from "wouter";
import './App.css'
import {PrettyTrackerPage} from './pages/PrettyCasTrackerPage.tsx'
import HomePage from './pages/HomePage.tsx'
// import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';

function App() {
  return(
    <>
      <div className="App">
      <Route path="/" component={HomePage} />
      </div>
      <Route path="/PrettyCasTracker" component={PrettyTrackerPage} />
    </>
  );
}

export default App;