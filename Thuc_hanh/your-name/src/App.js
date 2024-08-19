import { Component } from "react";
import Hello from "./components/Hello";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      number: 0,
      isLoggedIn: false,
      display: true,
    };
  }

  // login logout
  
  handleLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  };

  //Hiện thông báo trước khi Component ẩn
  delete = () => {
    this.setState({ display: false });
  };

  //[Thực hành] Đổi màu nền component sau khi xuất hiện
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "pink" });
    }, 5000);
  }

  //[Thực hành] Đếm số lần click vào Button tăng/giảm (State + event)
  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrease = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 });
    }
  };

  render() {
    //Hiện thông báo trước khi Component ẩn
    let comp;
    if (this.state.display) {
      comp = <Hello />;
    }
    //loggin logout
    const { isLoggedIn } = this.state
    if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
    return (
      <>
        <div style={{ textAlign: "center", padding: 30 }}>
          <button onClick={this.decrease}>Decrease</button>
          <span style={{ padding: 10 }}>{this.state.number}</span>
          <button onClick={this.increase}>Increase</button>
        </div>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          {comp}
          <button onClick={this.delete}>Xóa component</button>
        </div>

        <div
          style={{
            backgroundColor: this.state.color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: "auto",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <div>
            <h1>Please Log in</h1>
            <button onClick={this.handleLogIn}>Log in</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
