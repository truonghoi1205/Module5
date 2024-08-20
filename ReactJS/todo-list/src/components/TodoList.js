import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.item.trim() !== "") {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.item],
        item: "",
      }));
    } else {
      alert("Vui lòng nhập nội dung.");
    }
  };

  render() {
    return (
      <div className="container mt-5 text-center">
        <h1>ToDo List</h1>
        <div className="d-flex justify-content-center">
          <input
            placeholder="Nhập todo mới"
            className="form-control w-25"
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button className="ms-2 btn btn-sm btn-primary"onClick={this.handleAddItem}>
            Add
          </button>
        </div>
        <div className="text-start">
          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
