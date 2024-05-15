import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
