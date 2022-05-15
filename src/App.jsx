import Browse from './pages/Browse';
import Collection from './pages/Collection';
import CollectionDetails from './pages/CollectionDetails';
import './styles/App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

     <Browse />
     <Collection />
     <CollectionDetails />
     <Home /> 


    </div>
  );
}

export default App;
