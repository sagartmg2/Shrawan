import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ButtonClass from "./ButtonClass"
import Todo from './Todo';
import { useState } from 'react';

// import './css/styles.css'
// import "./Custom.css"

/* 
default export 
named export
 */

// export default class Button{
//   render(
//     <h1>hello</h1>
//   )
// }


// export default function App() {
export function App() {

  // Button("login")
  console.log("app-render");

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>TOGGLE</button>

      {
        show
        &&
        <Todo
          value="random_text"
        />
      }

      {/* <ButtonClass
        text="INCREMENT"
        color="cyan"
      /> */}

      {/* <hr></hr>
      <Button
        text="add todo"
        color="teal"
      /> */}

      {/* <Button
        text="create new account"
        color="orange"
      /> */}

    </div >
  );
}



// module.exports = App


// export default App;
