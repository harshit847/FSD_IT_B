import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StopWatch from './components/StopWatch';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/StopWatch' element={<StopWatch />} />
        <Route path='*' element={<h1>Not Available</h1>} />
      </Routes>
    </div>
  );
}

export default App;
