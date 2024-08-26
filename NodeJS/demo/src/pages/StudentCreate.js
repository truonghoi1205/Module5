import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import * as studentService from "../service/StudentService";
import * as classroomService from "../service/ClassroomService";
import CreateForm from "../components/student/CreateForm";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Tên bắt buộc")
    .min(3, "Tên không được ngắn hơn 3 ký tự"),
  address: Yup.string().required("Địa chỉ bắt buộc"),
  point: Yup.number().required("Điểm bắt buộc")
    .min(0, "Điểm phải lớn hơn 0")
    .max(10, "Điểm phải nhỏ hơn 10"),
  classroomId: Yup.number().required("Lớp học bắt buộc")
});

export default function StudentCreate() {
  const [classrooms, setClassrooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllClassrooms();
  }, []);

  const getAllClassrooms = async () => {
    try {
      const res = await classroomService.getAllClassrooms();
      setClassrooms(res);
    } catch (error) {
      toast.error("Không thể tải danh sách lớp học.");
    }
  };

  const saveStudent = async (values) => {
    try {
      const isSuccess = await studentService.saveStudent(values);
      if (isSuccess) {
        toast.success("Thêm mới thành công");
        navigate("/students");
      } else {
        toast.error("Thêm mới thất bại.");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi trong quá trình thêm mới sinh viên.");
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        point: 0,
        classroomId: '',
      }}
      onSubmit={saveStudent}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <CreateForm formik={formikProps} classrooms={classrooms} />
      )}
    </Formik>
  );
}