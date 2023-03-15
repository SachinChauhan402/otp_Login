import './App.css';
import Login from './pages/Login';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import Headers from "./components/Headers";
import {Routes, Route} from "react-router-dom";
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='/register' element= {<Register />} />
        <Route path='/dashboard' element= {<Dashboard />} />
        <Route path='/users/otp' element= {<Otp />} />
        <Route path='*' element= {<Error />} />
      </Routes>s
    </div>
  );
}

export default App;
