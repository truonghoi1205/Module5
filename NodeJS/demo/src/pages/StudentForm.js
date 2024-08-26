import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import * as studentService from "../service/StudentService";
import * as classroomService from "../service/ClassroomService";
import { toast } from "react-toastify";
import Form from "../components/student/Form";
import Loading from "../components/Loading";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Tên bắt buộc")
    .min(3, "Tên không được ngắn hơn 3 ký tự"),
  address: Yup.string().required("Địa chỉ bắt buộc"),
  point: Yup.number()
    .required("Điểm bắt buộc")
    .min(0, "Điểm phải lớn hơn 0")
    .max(10, "Điểm phải nhỏ hơn 10"),
  classroomId: Yup.number().required("Lớp học bắt buộc"),
});

function StudentForm({ isUpdate = false }) {
  const { id } = useParams();
  const [student, setStudent] = useState(isUpdate ? null : {});
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const classroomData = await classroomService.getAllClassrooms();
        setClassrooms(classroomData);

        if (isUpdate) {
          const studentData = await studentService.findStudentById(
            parseInt(id)
          );
          setStudent(studentData);
        }
      } catch (error) {
        toast.error("Không thể tải dữ liệu.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500); 
      }
    };
    fetchData();
  }, [id, isUpdate]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = isUpdate
        ? await studentService.updateStudent({ ...values, id: student.id })
        : await studentService.saveStudent(values);

      if (response) {
        toast.success(isUpdate ? "Cập nhật thành công" : "Thêm mới thành công");
        navigate("/students");
      } else {
        toast.error(isUpdate ? "Cập nhật thất bại" : "Thêm mới thất bại");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi trong quá trình xử lý.");
    } finally {
        setLoading(false);
      }
  };

  if (loading) return <Loading />;

  return (
    <Formik
      initialValues={{
        name: student?.name || "",
        address: student?.address || "",
        point: student?.point || 0,
        classroomId: student?.classroomId || "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {(formikProps) => (
        <Form
          formik={formikProps}
          classrooms={classrooms}
          isUpdate={isUpdate}
        />
      )}
    </Formik>
  );
}

export default StudentForm;
