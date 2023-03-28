import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Dashboard/Settings';
import Browse from './pages/Dashboard/Browse';
import Payment from './pages/Dashboard/Payment';
import Jobs from './pages/Dashboard/Jobs';

const App = () => {
  return (
    <>

      {/* <div className="root-container"> */}
      {/* <Home />*/}
      {/* </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path = "/cart" element = {<Cart />}></Route> */}
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/reset-password" element={<ResetPassword />}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}> </Route>
          <Route path="/account" element={<Account />}> </Route>
          { /* <Route path="/purchase" element={<Purchase />}> </Route> */}
          <Route path="/testing" element={<Dashboard/>}></Route>
          <Route path="/testing/settings" element={<Settings/>}></Route>
          <Route path="/testing/browse" element={<Browse/>}></Route>
          <Route path="/testing/jobs" element={<Jobs/>}></Route>
          <Route path="/testing/payment" element={<Payment/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
