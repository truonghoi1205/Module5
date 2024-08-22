import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as bookService from "../service/BookService.js"
import ModalEx from "./Modal.js";
function BookCreate({onSuccess}) {
    const [form, setForm] = useState({
        title: "",
        quantity: 0,
    });
    const navigate = useNavigate();

    const validationSchema  = Yup.object({
        title: Yup.string().required("Tên sách bắt buộc"),
        quantity: Yup.number().required("Số lượng bắt buộc")
            .positive("Số lượng phải lớn hơn 0"),
    });
    

    const saveBook = async (value, {resetForm}) => {
        let isSuccess = await bookService.saveBook(value)
        if(isSuccess) {
            toast.success("Thêm mới thành công");
            onSuccess();
            resetForm();
            navigate("/books");
        } else {
            toast.error("Thêm mới thất bại.")
        }
    }

    return (
        <>
        <Formik initialValues={{ title: "", quantity: 0 }}
            onSubmit={saveBook}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                <ModalEx handleClick={() => handleSubmit()} title="Thêm mới sách" actionType="add">
                    <Form>
                        <div>
                            <label className="form-label">Tên sách: </label>
                            <Field className="form-control" name="title" />
                            <ErrorMessage name="title" className="text-danger" component="p" />
                        </div>
                        <div>
                            <label className="form-label">Số lượng: </label>
                            <Field name="quantity" className="form-control" />
                            <ErrorMessage name="quantity" className="text-danger" component="p" />
                        </div>
                    </Form>
                </ModalEx>
            )}
        </Formik>
        </>
    );
}

export default BookCreate;