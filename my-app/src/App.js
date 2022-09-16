import logo from './logo.svg';
import './App.css';

/* 
default export 
named export
 */

// export default class Button{
//   render(
//     <h1>hello</h1>
//   )
// }



export default function App() {
  // export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id={true ? "true" : "false"}>
          hello world!!!
          {
            true ?
              <p>true</p> :
              <p>false</p>
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}



// module.exports = App


// export default App;
