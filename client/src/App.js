import logo from './logo.svg';
// import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './page/Home';
import Cart from './page/Cart';
import Order from './page/Order';
import ProtectedRoute from './component/ProtectedRoute';
import Login from './page/Login';
import Signup from './page/Signup';
import "./App.css"
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserStore } from './redux/reducer/user';

function App() {

  let dispatch = useDispatch()


  useEffect(() => {

    let access_token = localStorage.getItem("access_token")

    if (access_token) {

      axios.get("https://mern-ecommerce70.herokuapp.com/api/users/get-user", {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
        .then(res => {

          // CHANGE redux logged state to login

          dispatch(setUserStore(res.data))

        })
        .catch(err => {

        })
    }


  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="" element={<ProtectedRoute />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Route>
        <Route path='/admin' element={<h1>Admin</h1>} />
        {/* </Route> */}

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        {/* 
          <Route path='home' element={<Home />} /> */}
        {/* <Route path='users' element={<User />} />
            <Route index element={<Todo />} />
            <Route path=":id" element={<Show />} />
            <Route path="featured" element={<h1>featured</h1>} />
          </Route> */}

        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
