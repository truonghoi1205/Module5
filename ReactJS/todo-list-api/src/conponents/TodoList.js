import {useEffect, useState} from "react";
import * as todoService from "../service/TodoService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";


function TodoList() {
    const [job, setJob] = useState([]);
    const [form, setForm] = useState({
        title: '',
        completed: false
    })

    const objectValid = {
        title: Yup.string().required("Nội dung bắt buộc")
    }

    useEffect(() => {
        getAllTodo();
    },[])

    const getAllTodo = async () => {
        let res = await todoService.getAllTodo();
        setJob(res)
    }

    const saveJob = async (value, { resetForm }) => {
        value.completed = true;
        let isSuccess = await todoService.saveTodo(value)
        if(isSuccess) {
            setJob([...job, value ])
            toast.success("Thêm mới thành công")
            //clear job on input
            resetForm();
        } else {
            toast.error("Thêm mới thất bại.")
        }

    }


    return (
        <div className="container mt-5">
            <div>
            <h2>Danh sách công việc</h2>
                <Formik initialValues={form} onSubmit={saveJob} validationSchema={Yup.object(objectValid)}>
                    <Form className="d-flex">
                        <Field className='form-control w-25 me-2' name="title"/>
                        <ErrorMessage name="title" component="p"></ErrorMessage>
                        <button type="submit" className="btn  btn-sm btn-primary">Thêm mới</button>
                    </Form>
                </Formik>
            </div>
            <div className="mt-3">
                <ol>
                    {job.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            </div>
        </div>
    );

}

export default TodoList;