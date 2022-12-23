import { Navigate, Routes, Route } from 'react-router-dom';
// import Home from './component/Home';
import CharacterDetail from './component/CharacterDetail';
import CharacterList from './component/CharacterList';
import './App.scss';
import React from 'react';


function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}

      {/* <Route exact path="/" element={CharacterList} >
        redirect("/characters")
      </Route> */}
      <Route exact path="/" element={<Navigate to="/characters" />} />
      <Route exact path="/characters" element={<CharacterList />} />
      <Route path="/characters/:id" element={<CharacterDetail />} />
    </Routes>

  );
}




export default App;

