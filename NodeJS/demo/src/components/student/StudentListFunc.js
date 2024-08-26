import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Select from 'react-select'; // Import react-select
import useStudentList from "../useStudentList";
import DeleteStudentModal from "../DeleteStudentModal";
import * as studentService from "../../service/StudentService";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentListFunc = () => {
  const [name, setName] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [minPoint, setMinPoint] = useState("");
  const [maxPoint, setMaxPoint] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 5;

  const { students, classrooms, totalStudents } = useStudentList(
    page,
    limit,
    name,
    selectedClassroom?.value || "",  
    minPoint,
    maxPoint
  );

  const handleDeleteStudent = async (id) => {
    try {
      const isSuccess = await studentService.deleteStudent(id);
      if (isSuccess) {
        toast.success("Xóa thành công");
        setShowModal(false);
        setPage(1);  
        studentService.getAllStudents();
      } else {
        toast.error("Xóa thất bại");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi trong quá trình xử lý.");
    }
  };

  const handleShowModal = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const classroomOptions = [
    { value: "", label: "Chọn lớp học" },
    ...classrooms.map(c => ({
      value: c.id,
      label: c.name
    }))
  ];

  return (
    <div className="container mt-5 shadow-sm rounded p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="m-0">Danh sách học sinh</h2>
        <input
          className="form-control form-control w-25"
          placeholder="Nhập tên học sinh"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Link className="btn btn-sm btn-primary" to="/create">
          Thêm mới
        </Link>
      </div>

      <div className="mt-2 d-flex align-items-center">
        <h5 className="m-0">Tìm học sinh theo lớp:</h5>
        <Select
          options={classroomOptions}
          value={selectedClassroom}
          onChange={option => setSelectedClassroom(option)}
          placeholder="Chọn lớp học"
          styles= {{
            container: (provided) => ({
              ...provided,
              width: '160px',
              marginLeft: '1rem',
              fontSize: '0.850rem',
            }),
          }}
        />
      </div>

      <div className="mt-2 d-flex">
        <h5 className="m-0">Tìm học sinh theo điểm:</h5>
        <Form className="d-flex ms-3">
          <Form.Control
            type="number"
            placeholder="Điểm từ"
            className="form-control-sm"
            style={{ width: 95 }}
            value={minPoint}
            onChange={(e) => setMinPoint(e.target.value)}
          />
          <Form.Control
            className="ms-2 form-control-sm"
            type="number"
            style={{ width: 95 }}
            placeholder="Điểm đến"
            value={maxPoint}
            onChange={(e) => setMaxPoint(e.target.value)}
          />
        </Form>
      </div>

      <Table className="table table-hover table-bordered mt-5">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Điểm</th>
            <th>Lớp học</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.address}</td>
              <td>{s.point}</td>
              <td>{s.classroom?.name || "Chưa có lớp"}</td>
              <td>
                <Link
                  className="btn btn-sm btn-success me-2"
                  to={`/edit/${s.id}`}
                >
                  Sửa
                </Link>
                <button
                  className="btn btn-danger btn-sm pr-3"
                  onClick={() => handleShowModal(s)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between mt-3">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="btn btn-primary btn-sm"
        >
          Trang trước
        </Button>
        <span>
          Trang {page} trên {Math.ceil(totalStudents / limit)}
        </span>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(totalStudents / limit)}
          className="btn btn-primary btn-sm"
        >
          Trang sau
        </Button>
      </div>
      <DeleteStudentModal
        show={showModal}
        onHide={() => setShowModal(false)}
        student={selectedStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
};

export default StudentListFunc;
