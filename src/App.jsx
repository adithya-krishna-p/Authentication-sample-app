

import './App.css'
import Signup from './components/signup/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from './components/signin/SignIn'
import Main from './components/main/main';


function App() {

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  </div>
  )
    }




export default App
