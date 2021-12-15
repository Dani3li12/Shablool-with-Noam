import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from '../Home/Home';
import CreateKahoot from '../CreateKahoot/CreateKahoot';
import Game from '../Game/GameAdmin';
import GameClient from '../GameClient/GameClient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateKahoot />} />
        <Route path="/game" element={<Game />}></Route>
        <Route path="/gameclient" element={<GameClient />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
