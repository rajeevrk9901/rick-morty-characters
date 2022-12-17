import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './component/CharacterDetail';
import CharacterList from './component/CharacterList';
import './App.scss';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/characters" exact element={<CharacterList />} />
      <Route path="/characters/:id" element={<CharacterDetail />} />
    </Routes>


  );
}




export default App;

