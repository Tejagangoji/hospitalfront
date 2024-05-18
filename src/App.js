import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import Adminhome from './pages/admin/Adminhome';

function App() {
  const Isusertoken = () => {
    return (
      localStorage.getItem("usertoken") ? <Outlet /> : <Navigate to={'/login'} />
    )
  }
  const Isadmintoken = () => {
    return (
      localStorage.getItem("admintoken") ? <Outlet /> : <Navigate to={'/admin/login'} />
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Isusertoken />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin' element={<Isadmintoken />}>
          <Route path='/admin' element={<Adminhome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
