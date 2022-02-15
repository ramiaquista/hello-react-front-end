import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
