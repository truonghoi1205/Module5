import './App.css';
import React from "react"
import StudentListFunc from "./components/student/StudentListFunc";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import StudentUpdate from './pages/StudentUpdate';
import StudentCreate from './pages/StudentCreate';


function App() {
  return (
      <>
        <BrowserRouter>
          
          <Routes>
            <Route path="/create" element={<StudentCreate />} />
            <Route path="/students" element={<StudentListFunc/>} />
            <Route path="/edit/:id" element={<StudentUpdate/>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </>
  );
}

export default App;
