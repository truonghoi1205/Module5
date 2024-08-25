import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as studentService from '../service/StudentService';
import * as classroomService from '../service/ClassroomService';
import UpdateForm from '../components/student/UpdateForm';
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Tên bắt buộc")
    .min(3, "Tên không được ngắn hơn 3 ký tự"),
  address: Yup.string().required("Địa chỉ bắt buộc"),
  point: Yup.number()
    .required("Điểm bắt buộc")
    .min(0, "Điểm phải lớn hơn 0")
    .max(10, "Điểm phải nhỏ hơn 10"),
  classroomId: Yup.number().required("Lớp học bắt buộc")
});

export default function StudentUpdate() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [classrooms, setClassrooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentAndClassrooms = async () => {
      try {
        const studentData = await studentService.findStudentById(parseInt(id));
        setStudent(studentData);
        const classroomData = await classroomService.getAllClassrooms();
        setClassrooms(classroomData);
      } catch (error) {
        toast.error("Không thể tải dữ liệu.");
      }
    };
    fetchStudentAndClassrooms();
  }, [id]);

  const updateStudent = async (values) => {
    try {
      const success = await studentService.updateStudent({ ...values, id: student.id });
      if (success) {
        toast.success("Cập nhật thành công");
        navigate("/students");
      } else {
        toast.error("Cập nhật thất bại");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật.");
    }
  };

  if (!student) return <div>Loading...</div>;

  return (
    <Formik
      initialValues={{
        name: student.name,
        address: student.address,
        point: student.point,
        classroomId: student.classroomId || ""  
      }}
      onSubmit={updateStudent}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {formikProps => (
        <UpdateForm formik={formikProps} classrooms={classrooms} />
      )}
    </Formik>
  );
}