import { BrowserRouter, Link, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { StoreProvider } from './context/store';
import Home from './pages/home';
function App() {
  return (

    <>
     <StoreProvider>
  
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />

    </Routes>

    </StoreProvider>
  
      
   
      
    </>



  );
}

export default App;
