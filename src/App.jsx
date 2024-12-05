

import './App.css'
import Signup from './components/signup/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from './components/signin/SignIn'
import Main from './components/main/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}



export default App;
