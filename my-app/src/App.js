import logo from './logo.svg';
import './App.css';
import Button from './Button';

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

  return (
    <div className="App">

      <Button
        text="login"
        color="teal"
      />

      <Button
        text="create new account"
        color="orange"
      />
    
    </div >
  );
}



// module.exports = App


// export default App;
