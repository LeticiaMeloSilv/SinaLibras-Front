
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro'
import Login from './components/Login'
import Home from './components/Home'
import Quiz from './components/Quiz'
import AcertouQuiz from './components/AcertouQuiz'

import { AppProvider } from './context/AppContext'; // Importa o contexto

import React from 'react';



function App() {


  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
