import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/Home';
import Room from './Pages/Room';
function App() { 
  return (
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/room/:roomId" element={<Room></Room>}></Route>

      </Routes>
      );
}

export default App;
