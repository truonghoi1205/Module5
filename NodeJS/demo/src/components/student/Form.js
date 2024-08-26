import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import Select from 'react-select';

function Form({ formik, classrooms, isUpdate }) {
  const classroomOptions = classrooms.map(c => ({
    value: c.id,
    label: c.name
  }));

   return (
    <form onSubmit={formik.handleSubmit} className="container w-25 mt-5 shadow-sm p-3">
      <h2 className="mb-3">{isUpdate ? 'Cập nhật học sinh' : 'Thêm mới học sinh'}</h2>
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
        <Select
          options={classroomOptions}
          onChange={option => formik.setFieldValue("classroomId", option?.value || "")}
          value={classroomOptions.find(c => c.value === formik.values.classroomId)}
          placeholder="Chọn lớp học"
        />
        <ErrorMessage className="text-danger" name="classroomId" component="p" />
      </div>
      <div className="text-end">
        <Link className="btn btn-sm btn-secondary me-2" to="/students">Quay lại</Link>
        <button className="btn btn-sm btn-primary" type="submit">
          {isUpdate ? 'Cập nhật' : 'Thêm mới'}
        </button>
      </div>
    </form>
  );
}

export default Form;