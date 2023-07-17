
import React from 'react';
import "./App.css";

import { Routes, Route} from 'react-router-dom';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';


import SignInPage from './routes/sign-in/sign-in.component';
import Home from './routes/home/home.component';
import AddBook from './components/add-book/add-book.component';
import LogOutPage from './components/log-out/log-out.component';


const App = () => {

return (
  <div>
    <Header/>
  <Routes>
  <Route path="/" element={<SignInPage />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/add-book" element={<AddBook />} />
  <Route path="/book-list" element={<Home />} />
  <Route path="/log-out" element={<LogOutPage/>} />

 
  
  </Routes>
    
     <Footer />
      </div>
  
);

};

export default App;

