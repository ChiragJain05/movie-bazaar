// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage';
import LoginPage from './components/loginpage';

function App() {
  return (
    <div className="App">
  

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
