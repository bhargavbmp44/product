import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Home';
import All_item from './All_item';
import Add_item from './Add_item';



import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Detail from './Detail';
import Edit_item from './Edit_item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
   <BrowserRouter>
   <Layout/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/All_item' element={<All_item/>}></Route>
            <Route path='/Add_item' element={<Add_item/>}></Route>
            
            <Route path="/All_item/Detail/:id" element={<Detail/>}></Route>
            <Route path="/All_item/Detail/Edit_item/:id" element={<Edit_item/>}></Route>
           
        </Routes>
        <Footer/>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();