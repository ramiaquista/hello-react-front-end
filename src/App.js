import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
