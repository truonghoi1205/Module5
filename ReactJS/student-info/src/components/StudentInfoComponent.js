import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 30,
            address: "Hà Nội",
          },
          {
            id: 2,
            name: "Nguyễn Văn B",
            age: 25,
            address: "Tp. Hồ Chí Minh",
          },
          {
            id: 3,
            name: "Nguyễn Văn C",
            age: 26,
            address: "Quảng Ninh",
          },
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Danh sách học sinh</h1>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Tuổi</th>
              <th scope="col">Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
