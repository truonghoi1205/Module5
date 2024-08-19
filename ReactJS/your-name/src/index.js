import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// const name = "Your name";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

//[Thực hành] Nhúng tên của bạn vào React Element tạo bởi React.createElement
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// );

//[Thực hành] Nhúng tên của bạn vào React Element tạo bởi JSX
// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);

//[Thực hành] Tạo Element thể hiện danh sách các loại quả
// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

// root.render(
// <div>
//   <h1>List of fruits</h1>
//   <ul>
//       { fruits.map((item) => (
//         <li>{ item }</li>
//       )) }
//     </ul>
// </div>,
// document.getElementById('root')
// );

//[Thực hành] Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss)
// const tick = () => {
//   root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };

// setInterval(tick, 1000);

//[Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
// root.render(
//   <h4>Browser's details: {navigator.userAgent}</h4>
// )

//[Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
// const students = [
//   {
//     id:1,
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     id:2,
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     id:3,
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     id:4,
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     id:5,
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     id:6,
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ];

// root.render(
//   <div>
//     <h1>Student List</h1>
//     <table>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Company</th>
//           <th>Contact</th>
//           <th>Country</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student,index) => (
//           <tr key={student.id}>
//             <td>{index + 1}</td>
//             <td>{student.company}</td>
//             <td>{student.contact}</td>
//             <td>{student.country}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// )

//[Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)

// root.render(
//   <div className="container">
//   <div className="card">
//     <div className="card--header" />
//     <img
//       className="avatar"
//       src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//       alt="avatar"
//     />
//     <div className="card--body">
//       <div>
//         <p className="text-header">Hội Tõn Xà Lõn</p>
//         <p className="text-sub">
//           Hội đẹp trai cute lạc lối, thanh lịch vô địch nhất vũ trụ
//         </p>
//         <button className="btn third">FOLLOW</button>
//       </div>
//     </div>
//   </div>
// </div>
// )

// [Bài tập] Tạo Element thể hiện Sign in Form sử dụng Bootstrap
root.render(
  <div className="container mt-5 d-flex align-items-center justify-content-center text-center">
    <div className="form-signin w-25 mt-5">
      <form>
        <img
          className="mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3 mt-2 d-flex justify-content-start">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  </div>
);
