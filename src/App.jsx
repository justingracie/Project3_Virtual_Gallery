
import './styles/App.css';
import './styles/index.css'
// import Home from './pages/Home';
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="App">
      <Outlet />

    </div>
  );
}

export default App;
