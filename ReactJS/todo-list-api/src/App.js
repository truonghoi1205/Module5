import TodoList from "./conponents/TodoList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <ToastContainer />
    </div>
  );
}

export default App;
