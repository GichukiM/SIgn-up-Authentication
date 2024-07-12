import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./Layout";
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css'

import Dashboard from './pages/Dashboard';
import { UserProvider } from './pages/context/UserContext';

function App() {

  return (     
     <BrowserRouter>
     <UserProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
