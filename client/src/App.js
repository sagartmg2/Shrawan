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

function App() {
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
