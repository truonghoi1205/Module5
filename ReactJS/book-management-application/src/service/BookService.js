import axios from "axios";

const API_URL = "http://localhost:8080/books";

export const getAllBooks = async () => {
  try {
    let res = await axios.get(API_URL);
    return res.data;
  } catch (e) {
    return [];
  }
};

export const saveBook = async (book) => {
  try {
    await axios.post(API_URL, book);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// export const getBookById = async (id) => {
//   const res = await axios.get(`${API_URL}/${id}`);
//   return res.data;
// };

// export const updateBook = async (id, book) => {
//   try {
//     await axios.put(`${API_URL}/${id}`, book);
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

export const deleteBook = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res
  } catch (error) {
    console.error(`Lỗi khi xóa sách với ID ${id}`, error);
    return false;
  }
};
