import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <>

    {/* <div className="root-container"> */}
     {/*<Home />*/}
    {/* </div> */}
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/*<Route path = "/cart" element = {<Cart />}></Route> */}
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/reset-password" element={<ResetPassword />}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}> </Route>
          { /*<Route path="/account" element={<UserAccount />}> </Route>
          <Route path="/purchase" element={<Purchase />}> </Route>
          <Route path="/testing" element={<Navbar/>}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
