import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Chart from '../pages/Chart';
import ParticipantsForm from '../pages/ParticipantsForm';

const AppRoutes = () => {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<SignInPage/>}/>
            <Route path="/register" element={<SignUpPage/>}/>
            <Route path="/chart" element={<Chart/>}/>
            <Route path = "/participants-form" element = {<ParticipantsForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes;
