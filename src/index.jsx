import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import Browse from './pages/Browse';
import Collection from './pages/Collection';
import CollectionDetails from './pages/CollectionDetails';
import Home from './pages/Home';
import Nav from './components/nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />}/> 
        <Route path='collection/' element={<Collection />}/>
        <Route path='collection/:id' element={<CollectionDetails/>}/>
        <Route path='browse/' element={<Browse />}/>
      </Routes>


    </Router>
  </React.StrictMode>
);
