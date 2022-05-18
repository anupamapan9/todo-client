import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/Users/SignUp';
import Login from './Components/Users/Login';
import ToDo from './Components/ToDo/ToDo';
import Navbar from './Components/Common/Navbar';
import RequireAuth from './Components/Common/RequireAuth';
import Forgotten from './Components/Users/Forgotten';

function App() {
  return (
    <>

      <Navbar>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotten' element={<Forgotten />} />
          <Route path='/todo' element={
            <RequireAuth>
              <ToDo />
            </RequireAuth>} />
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
