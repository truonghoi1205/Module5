import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as bookService from "../service/BookService.js";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCreate from "./BookCreate.js";
import BookUpdate from "./BookUpdate.js";
import ModalEx from "./Modal.js";
import { toast } from "react-toastify";

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    let res = await bookService.getAllBooks();
    setBooks(res);
  };

  const handleDelete = async () => {
    if (selectedBookId !== null) {
      const success = await bookService.deleteBook(selectedBookId);
      if (success) {
        toast.success("Xóa sách thành công");
        getAllBooks(); 
      } else {
        toast.error("Xóa sách thất bại");
      }
      setShowConfirmDelete(false); 
      setSelectedBookId(null); 
    }
  };

  return (
    <div className="container mt-5 shadow-sm p-3 rounded">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-0">Danh sách sách</h2>
        <BookCreate onSuccess={getAllBooks}/>
      </div>

      <table className="table table-hover table-bordered mt-5">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Số lượng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, index) => (
            <tr key={b.id}>
              <td>{index + 1}</td>
              <td>{b.title}</td>
              <td>{b.quantity}</td>
              <td>
                <Link className="btn btn-sm btn-success me-2" to={`/books/edit/${b.id}`}>
                  Chỉnh sửa
                </Link>
                <ModalEx handleClick={handleDelete} title="Xóa" actionType="delete">
                    <p className="m-0">Bạn có chắc chắn muốn xóa sách <span className="fw-bold">{b.title}</span> không?</p>
                    <small className="text-danger">Hành động này không thể hoàn tác!</small>
                </ModalEx>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default BookList;
