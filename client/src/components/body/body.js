import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BannerSlider from '../banner/BannerSlider';
import Tutorial from '../tutorial/Tutorial';
import SignUp from '../auth/signup/SignUp';
import SignIn from '../auth/signin/Signin';
import './body.css';

const Body = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<div className='body-custom'><BannerSlider  /></div>} />
                <Route path="/home" element={<div className='body-custom'><BannerSlider /></div>} />
                <Route path="/tutorial" element={<div className='body-custom'><Tutorial /></div>} />
                <Route path="/signup" element={<div className='body-custom'><SignUp /></div>} />
                <Route path="/signin" element={<div className='body-custom'><SignIn /></div>} />
          </Routes>
        </BrowserRouter>
    );
};


export default Body;


