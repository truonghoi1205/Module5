import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";

function UpdateForm({ formik, classrooms }) {
  return (
    <form onSubmit={formik.handleSubmit} className="container w-25 mt-5 shadow-sm p-3">
      <h2 className="mb-3">Cập nhật học sinh</h2>
      <div className="mb-3">
        <label className="form-label">Tên</label>
        <Field name="name" className='form-control form-control-sm' />
        <ErrorMessage className="text-danger" name="name" component="p" />
      </div>
      <div className="mb-3">
        <label className="form-label">Địa chỉ</label>
        <Field name="address" className='form-control form-control-sm' />
        <ErrorMessage className="text-danger" name="address" component="p" />
      </div>
      <div className="mb-3">
        <label className="form-label">Điểm</label>
        <Field type='number' name="point" className='form-control form-control-sm' />
        <ErrorMessage className="text-danger" name="point" component="p" />
      </div>
      <div className="mb-3">
        <label className="form-label">Lớp học</label>
        <Field as="select" name="classroomId" className="form-select form-select-sm">
          <option value="">Chọn lớp học</option>
          {classrooms.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </Field>
        <ErrorMessage className="text-danger" name="classroomId" component="p" />
      </div>
      <div className="text-end">
        <Link className="btn btn-sm btn-secondary me-2" to="/students">Quay lại</Link>
        <button className="btn btn-sm btn-primary" type="submit">Cập nhật</button>
      </div>
    </form>
  );
}

export default UpdateForm;