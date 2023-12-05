import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

const AppRoutes = () => {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<SignInPage/>}/>
            <Route path="/register" element={<SignUpPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
