import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { Cards } from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';


// uses the index.js from components to import correct components 
import { Cards, Chart, CountryPicker } from './components';




export default class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}




// original code
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
