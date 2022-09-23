import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ButtonClass from "./ButtonClass"
import Todo from './Todo';
import User from './User';
import Dashboard from './Dashboard';

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

      <ul>
        <li><Link to='/home'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/'>dashboard</Link></li>
        <li><Link to='/users'>users</Link></li>
        <li><Link to='/todos'>todos</Link></li>
      </ul>
      <Link to={"google.com"}>google</Link>
      <Routes>

        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='home' element={<h1>Home</h1>} />
        <Route path='about' element={<h1>About Us</h1>} />
        <Route path='contact' element={<h1>Contact</h1>} />
        <Route path='users' element={<User />} />
        <Route path='todos' element={<Todo />} />
      </Routes>

      <button onClick={() => setShow(!show)}>TOGGLE</button>

      {
        show
        &&
        <User />
        // <Todo
        //   value="random_text"
        // />
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
