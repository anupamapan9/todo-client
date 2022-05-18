
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/Users/SignUp';
import Login from './Components/Users/Login';
import ToDo from './Components/ToDo/ToDo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;
