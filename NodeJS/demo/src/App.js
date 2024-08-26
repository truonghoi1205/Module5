import './App.css';
import React from "react"
import StudentListFunc from "./components/student/StudentListFunc";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import StudentForm from './pages/StudentForm';


function App() {
  return (
      <>
        <BrowserRouter>
          
          <Routes>
            <Route path="/create" element={<StudentForm/>} />
            <Route path="/students" element={<StudentListFunc/>} />
            <Route path="/edit/:id" element={<StudentForm isUpdate={true} />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </>
  );
}

export default App;
