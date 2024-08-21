import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    if(job === '') {
      alert("Vui lòng nhập công việc!");
      return;
    }
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="container text-center mt-5">
      <h2>Todo-List</h2>
      <div className="d-flex m-auto w-25">
          <input className="form-control" placeholder="Nhập công việc" value={job} onChange={(e) => setJob(e.target.value)} />
          <button className="btn btn-sm btn-primary ms-2 w-50" onClick={handleSubmit}>Thêm mới</button>
      </div>
      <ul className="list-unstyled mt-3">
        {jobs.map((job, index) => (
          <li className="text-start ps-2 py-2 border-bottom fs-4" key={index}>{index + 1 }. {job}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
