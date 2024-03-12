import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import AddTransaction from './pages/addTransaction';
import EditTransaction from './pages/editTransaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddTransaction />} />
        <Route exact path="/edit" element={<EditTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem('user'))
    return props.children
  else
    return Navigate('/', { replace: true })
}

export default App;
