import {  useState } from "react";
import ModalEx from "./Modal.js";
import { toast } from "react-toastify";
import * as bookService from "../service/BookService.js";
function BookDelete ({ selectedBookId, onDeleteSuccess }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const handleDelete = async () => {
        if (selectedBookId !== null) {
          const success = await bookService.deleteBook(selectedBookId);
          if (success) {
            toast.success("Xóa sách thành công");
            onDeleteSuccess(); 
          } else {
            toast.error("Xóa sách thất bại");
          }
          setShowConfirmDelete(false); 
        }
      };


      return (
        <>
        {({ handleSubmit }) => (
                <ModalEx handleClick={() => handleSubmit(handleDelete)} title="Xóa" actionType="delete">
                    <p className="m-0">Bạn có chắc chắn muốn xóa sách này không?</p>
                    <small className="text-danger">Hành động này không thể hoàn tác!</small>
                </ModalEx>
            )}
        
        </>
    )

}

export default BookDelete;