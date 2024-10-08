import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Dashboard/Settings';
import Browse from './pages/Dashboard/Browse';
import Payment from './pages/Dashboard/Payment';
import Jobs from './pages/Dashboard/Jobs';
import Order from './pages/Dashboard/Order';
import Select from './components/Select';
// import { UserAuthContextProvider } from './context/UserAuthContext';

const App = () => {
  return (
    <>
 {/* <UserAuthContextProvider> */}
   
      {/* <div className="root-container"> */}
      {/* <Home />*/}
      {/* </div> */}
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path = "/cart" element = {<Cart />}></Route> */}
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}> </Route>
          <Route path="/account" element={<Account />}> </Route>
          { /* <Route path="/purchase" element={<Purchase />}> </Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/dashboard/settings" element={<Settings/>}></Route>
          <Route path="/dashboard/browse" element={<Browse/>}></Route>
          <Route path="/dashboard/jobs" element={<Jobs/>}></Route>
          <Route path="/dashboard/payment" element={<Payment/>}></Route>
          <Route path='/dashboard/order' element={<Order />}></Route>
          <Route path='/testing' element={<Select />}></Route>
        </Routes>
      </Router>
    
    {/* </UserAuthContextProvider> */}
    </>
  );
};

export default App;
