import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route,Routes} from "react-router-dom";

import './App.css';

import Navbar from './components/navbar'
import Admin from './components/admin';
import User from './components/addUser';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
     <Routes>

     <Route path="/" element={<User />}></Route>

     <Route exact path="/admin/" element={<Admin />}></Route>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
