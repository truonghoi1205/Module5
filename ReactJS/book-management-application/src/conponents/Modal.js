import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function ModalEx({handleClick, children,title,actionType  }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    handleClick();
    handleClose();
  };

  const getButtonProps = () => {
    switch (actionType) {
      case 'add':
        return { text: 'Thêm mới', variant: 'primary' };
      case 'update':
        return { text: 'Cập nhật', variant: 'success' };
      case 'delete':
        return { text: 'Xóa', variant: 'danger' };
      default:
        return { text: 'Xác nhận', variant: 'primary' };
    }
  };

  const { text, variant } = getButtonProps();

  return (
    <>
      <Button className={actionType === 'delete' ? 'btn-danger btn-sm' : actionType === 'update' ? 'btn-success btn-sm' : 'btn-sm'} onClick={handleShow}>
        {title || "Mở Modal"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button
              variant={variant}
              onClick={handleButtonClick}
              className="btn-sm"
            >
              {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalEx;
