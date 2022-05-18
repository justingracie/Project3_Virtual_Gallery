import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import Browse from './pages/Browse';
import CollectionCezanne from './pages/CollectionCezanne';
import CollectionDetails from './pages/CollectionDetailsCezanne';
import CollectionDali from './pages/CollectionDali';
import CollectionPicasso from './pages/CollectionPicasso';
// import Carousel from './components/Carousel';
// import Home from './pages/Home';
import CarouselComponent from './components/CarouselComponent';
// import Nav from './components/nav';
import Navbar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <CarouselComponent />}/> 
        <Route path='collectionCezanne/' element={<CollectionCezanne />}/>
        <Route path='collectionDali/' element={<CollectionDali />}/>
        <Route path='collectionPicasso/' element={<CollectionPicasso />}/>
        <Route path='collection/:id' element={<CollectionDetails/>}/>
        <Route path='browse/' element={<Browse />}/>
      </Routes>


    </Router>
  </React.StrictMode>
);
