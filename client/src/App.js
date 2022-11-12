import React, { createContext } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Pagenotfound from './components/Pagenotfound'

const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Pagenotfound />} />

    </Routes>
  )
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init)
  return (
    <div>
      <Router>
        <UserContext.Provider value={{ state, dispatch }}>
          <Routing />
        </UserContext.Provider>
      </Router>




    </div >
  )
}

export default App
