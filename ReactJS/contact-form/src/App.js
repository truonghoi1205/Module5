import React, { useState } from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast,ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './conponents/Success';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const navigate = useNavigate();

  const objValid = {
    name: Yup.string().required("Tên bắt buộc."),
    email: Yup.string().required("Email bắt buộc.")
    .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, "Email chưa đúng định dạng"),
    phone: Yup.string().required("Số điện thoại bắt buộc.")
    .matches(/^\+?\d{1,15}$/, "Số điện thoại không đúng định dạng"),
    message: Yup.string().required("Nội dung bắt buộc.")
  }

  const handleSubmit = (value) => {
    console.log(value);
    toast.success("Gửi thành công")
    navigate("/success")
  }


  return (
    <div className="container w-25 shadow-sm p-3 rounded mt-5">
      <h2>Đăng ký</h2>
        <Formik initialValues={form} onSubmit={handleSubmit} validationSchema={Yup.object(objValid)}>
          <Form>
              <div className='mb-3'>
                  <label className='form-label'>Tên</label>
                  <Field className="form-control" name="name"/>
                  <ErrorMessage className='text-danger' name="name" component="p"></ErrorMessage>
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <Field className="form-control" name="email"/>
                  <ErrorMessage className='text-danger' name="email" component="p"></ErrorMessage>
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Số điện thoại</label>
                  <Field className="form-control" name="phone"/>
                  <ErrorMessage className='text-danger' name="phone" component="p"></ErrorMessage>
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Nội dung</label>
                  <Field className="form-control" as="textarea" name="message"></Field>
                  <ErrorMessage className='text-danger' name="message" component="p"></ErrorMessage>
              </div>
              <div className='text-end'>
                  <button type="submit" className='btn btn-sm btn-primary '>Gửi</button>
              </div>
            </Form>
        </Formik>
    </div>
  );
}


function App() { 
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/success" element={<Success/>} />
              </Routes>
          </BrowserRouter>
          <ToastContainer/>
      </>
  );
}

export default App;
