import React from 'react'
import Movie from './Movie'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Board from './Board';
import Clock from './Clock';
import Ghost from './Ghost';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hailey from './Hailey';
import Ask from './Ask';
import Dash from './Dash';
import Event from './Event';
import Rot from './Rot';
import Time from './Time';
import Ent from './Ent';
import Sunny from './Sunny';
import Ind from './Ind';
import Zoo from './Zoo';
import Comedy from './Comedy';
import Cty from './Cty';
import Oml from '../Oml';
import Contact from './Contact';



function App() {

  return (
<div>



  <BrowserRouter>
  
  <Routes>

       <Route path='/movie' element={<Movie/>}></Route>
    <Route path='/board' element={<Board/>} />
  <Route path='/Clock' element={<Clock/>}></Route>

  <Route path='/ghost' element={<Ghost/>}></Route>
  <Route path='/hailey' element={<Hailey/>}></Route>
  <Route path='/ask' element={<Ask/>}></Route>
   <Route path='/dash' element={<Dash/>}></Route>
    <Route path='/event' element={<Event/>}></Route>
    <Route path="/rot" element={<Rot/>}></Route>
    <Route path='/time' element={<Time/>}></Route>
    <Route path='/ent' element={<Ent/>}></Route>
    <Route path='/sunny' element={<Sunny/>}></Route>
     <Route path='/ind' element={<Ind/>}></Route>
     <Route path='/zoo' element={<Zoo/>}></Route>
     <Route path="/comedy" element={<Comedy/>}></Route>
     <Route path='cty' element={<Cty/>}></Route>
     <Route path='Oml' element={<Oml/>}></Route>
     <Route path='contact' element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>

  
</div>
  )
}

export default App