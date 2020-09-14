import React, { Component } from 'react';
import './App.css';

// import { Cards } from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';


// uses the index.js from components to import correct components 
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import image from './images/image.png';


import { fetchData } from './api';


export default class App extends Component {


  state = {
    data: {},
  }



  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img  src={image} alt="covid-19 banner"/>
        <Cards data={data}/>
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
