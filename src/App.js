
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/Users/SignUp';
import Login from './Components/Users/Login';
import ToDo from './Components/ToDo/ToDo';
import Navbar from './Components/Common/Navbar';

function App() {
  return (
    <>
      <Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/todo' element={<ToDo />} />
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
