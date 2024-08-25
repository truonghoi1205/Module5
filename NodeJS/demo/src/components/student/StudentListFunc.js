import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as studentService from "../../service/StudentService";
import * as classroomService from "../../service/ClassroomService";
import { Table, Form, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function StudentListFunc() {
  const [students, setStudents] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [name, setName] = useState("");
  const [selectedClassroomId, setSelectedClassroomId] = useState("");
  const [minPoint, setMinPoint] = useState("");
  const [maxPoint, setMaxPoint] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    getAllStudents();
    getAllClassrooms();
  }, [name, selectedClassroomId, minPoint, maxPoint]);

  const getAllStudents = async () => {
    let res = await studentService.getAllStudents(
      name,
      selectedClassroomId,
      minPoint,
      maxPoint
    );
    setStudents(res);
  };

  const getAllClassrooms = async () => {
    let res = await classroomService.getAllClassrooms();
    setClassrooms(res);
  };

  const deleteStudent = async (id) => {
    let isSuccess = await studentService.deleteStudent(id);
    if (isSuccess) {
      setStudents(students.filter((s) => s.id !== id));
      toast.success("Xóa thành công");
      setShowModal(false);
    } else {
      toast.error("Xóa thất bại");
    }
  };

  const handleShow = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleClassroomChange = (e) => {
    setSelectedClassroomId(e.target.value);
  };

  return (
    <div className="container mt-5 shadow-sm rounded p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="m-0">Danh sách học sinh</h2>
        <input
          className="form-control form-control-sm w-25"
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
        <select
          style={{ width: 115 }}
          className="form-select form-select-sm ms-3"
          value={selectedClassroomId}
          onChange={handleClassroomChange}
        >
          <option value="">Chọn lớp</option>
          {classrooms.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
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
                  onClick={() => handleShow(s)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xoá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn xoá học sinh{" "}
          <span className="fw-bold">{selectedStudent?.name}</span> không?
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-sm"
            variant="danger"
            onClick={() => deleteStudent(selectedStudent.id)}
          >
            Xoá
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudentListFunc;
