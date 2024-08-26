import { Modal, Button } from "react-bootstrap";

const DeleteStudentModal = ({ show, onHide, student, onDelete }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Xác nhận xoá</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className="m-0">
        Bạn có chắc muốn xoá học sinh{" "}
        <span className="fw-bold">{student?.name}</span> không?
      </p>
      <small className="text-danger">
        Hành động này không thể hoàn tác!!
      </small>
    </Modal.Body>
    <Modal.Footer>
      <Button
        className="btn-sm"
        variant="danger"
        onClick={() => onDelete(student.id)}
      >
        Xoá
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeleteStudentModal;
