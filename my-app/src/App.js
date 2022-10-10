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
import Show from './Show';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Signup from './Signup';

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

export function Title(props) {
  return < p > {props.login_status ? "logout" : "login"}</p >
}

export function AuthButton(props) {
  return <button
    type='button'
    style={{
      backgroundColor: "grey"
    }}
    onClick={() => {
      props.setLoginStatus(false)
      localStorage.setItem("logged_in", false)
    }}>

    <Title
      // props drilling
      login_status={props.login_status}
    />
    
  </button>
}


export function App() {

  // Button("login")
  console.log("app-render");

  const [show, setShow] = useState(false);

  // const status = localStorage.getItem("logged_in")

  const [login_status, setLoginStatus] = useState(JSON.parse(localStorage.getItem("logged_in")) || false);

  return (
    <div className="App">

      <ul style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around"
      }}>
        <li><Link to='/home'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/'>dashboard</Link></li>
        <li><Link to='/admin'>aDMIN</Link></li>
        <li><Link to='/users'>users</Link></li>
        <li><Link to='/todos'>todos</Link></li>
        <li>
          {
            login_status
              ?
              <AuthButton
                setLoginStatus={setLoginStatus}
                login_status={login_status}
              />
              :
              <Link to='/login'>login</Link>
          }
        </li>

      </ul>
      <Link to={"google.com"}>google</Link>


      <Routes>
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}

        <Route path="" element={<ProtectedRoute login_status={login_status} />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/admin' element={<h1>Admin</h1>} />
        </Route>

        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login setLoginStatus={setLoginStatus} />} />
        <Route path='home' element={<h1>Home</h1>} />
        <Route path='about' element={<h1>About Us</h1>} />
        <Route path='contact' element={<h1>Contact</h1>} />
        <Route path='users' element={<User />} />

        {/* <Route path='todos' element={<Todo />} />
        <Route path='todos/:id' element={<Show />} />
        <Route path='todos/featured' element={<h1>featured</h1>} /> */}

        {/* <Route path="todos" element={<Todo />}> */}
        <Route path="todos">
          <Route index element={<Todo />} />
          <Route path=":id" element={<Show />} />
          <Route path="featured" element={<h1>featured</h1>} />
        </Route>

        {/* <Route path=":other" element={<h1>page not found</h1>} /> */}
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>

      {/* <button onClick={() => setShow(!show)}>TOGGLE</button> */}

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
