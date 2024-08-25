import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as bookService from "../service/BookService.js";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCreate from "./BookCreate.js";
import BookUpdate from "./BookUpdate.js";
import { toast } from "react-toastify";
import BookDelete from "./BookDelete.js";

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    let res = await bookService.getAllBooks();
    setBooks(res);
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
                  <BookDelete
                    selectedBookId={selectedBookId}
                    onDeleteSuccess={getAllBooks}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
