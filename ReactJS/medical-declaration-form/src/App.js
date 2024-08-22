import DeclarationForm from "./DeclarationForm";
import { toast, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <DeclarationForm />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
