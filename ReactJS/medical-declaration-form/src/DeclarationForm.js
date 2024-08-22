import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const tokens = [
  {
    id: 1,
    name: "Sốt",
  },
  {
    id: 2,
    name: "Ho",
  },
  {
    id: 3,
    name: "Khó thở",
  },
  {
    id: 4,
    name: "Viêm phổi",
  },
  {
    id: 5,
    name: "Đau họng",
  },
  {
    id: 6,
    name: "Mệt mỏi",
  },
];

const contacts = [
  {
    id: 1,
    name: "Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19",
  },
  {
    id: 2,
    name: "Người từ nước có bệnh COVID-19",
  },
  {
    id: 3,
    name: "Người có biểu hiện (Sôt, ho, khó thở, viêm phổi)",
  },
];

const SEX_LIST = [
  { label: "Nam", value: "male" },
  { label: "Nữ", value: "female" },
];

function DeclarationForm() {
  const [form, setForm] = useState({
    name: "",
    passport: "",
    yearOfBirth: "",
    gender: "",
    nationality: "",
    workCompany:'',
    workingDepartment: '',
    province: "",
    district: "",
    ward: "",
    streets: "",
    phone: "",
    email: "",
    message: '',
    contact: [],
    token: []
  });

  const [checkToken, setCheckToken] = useState([]);
  const [checkContact, setCheckContact] = useState([]);

  const objValid = {
    name: Yup.string().required("Tên bắt buộc."),
    passport: Yup.string().required("Hộ chiếu bắt buộc."),
    yearOfBirth: Yup.number()
      .required("Năm sinh bắt buộc.")
      .min(1901, "Năm sinh > 1900")
      .max(new Date().getFullYear(), "Năm sinh không được ở tương tai"),
    nationality: Yup.string().required("Quốc tịch bắt buộc."),
    province: Yup.string().required("Tỉnh/Thành phố bắt buộc."),
    district: Yup.string().required("Quận/Huyện bắt buộc."),
    ward: Yup.string().required("Phường/Xã bắt buộc."),
    streets: Yup.string().required(
      "Số nhà, phố, tổ dân phố /thôn /đội bắt buộc."
    ),
    phone: Yup.string().required("Số điện thoại bắt buộc."),
    email: Yup.string()
      .required("Email bắt buộc.")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Email chưa đúng định dạng"
      ),
  };
  
  const handleCheckToken = (id) => {
    setCheckToken((prev) => {
      const isChecked = checkToken.includes(id);
      if (isChecked) {
        return checkToken.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleCheckContact = (id) => {
    setCheckContact((prev) => {
      const isChecked = checkContact.includes(id);
      if (isChecked) {
        return checkContact.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
      
    });
  };

  const handleSubmit = (value) => {
    value.token = checkToken;
    value.contact = checkContact
    console.log(value);
    toast.success("Khai báo thành công!");
  };

  return (
    <div className="container mt-5 ">
      <Formik
        initialValues={form}
        onSubmit={handleSubmit}
        validationSchema={Yup.object(objValid)}
      >
        <Form>
          <div className="row">
            <div className="col-5 me-5 shadow-sm p-3 ">
              <h2>Tờ khai y tế</h2>
              <div className="mb-3">
                <label className="form-label">Tên</label>
                <Field className="form-control" name="name" />
                <ErrorMessage
                  className="text-danger"
                  name="name"
                  component="p"
                ></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Hộ chiếu/CMND</label>
                <Field className="form-control" name="passport" />
                <ErrorMessage
                  className="text-danger"
                  name="passport"
                  component="p"
                ></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Năm sinh</label>
                <Field className="form-control" name="yearOfBirth" />
                <ErrorMessage
                  className="text-danger"
                  name="yearOfBirth"
                  component="p"
                ></ErrorMessage>
              </div>
              <div className="mb-3 d-flex">
                <p className=" me-3">Giới tính: </p>
                <div className="d-flex justify-content-between">
                  {SEX_LIST.map((option) => (
                    <div key={option.value} className="me-3">
                      <Field
                        type="radio"
                        name="gender"
                        value={option.value}
                        id={option.value}
                      />
                      <label htmlFor={option.value} className="ms-2">{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Quốc tịch</label>
                <Field className="form-control" name="nationality" />
                <ErrorMessage
                  className="text-danger"
                  name="nationality"
                  component="p"
                ></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Công ty làm việc</label>
                <Field className="form-control" name="workCompany" />
              </div>
              <div className="mb-3">
                <label className="form-label">Bộ phận làm việc</label>
                <Field className="form-control" name="workingDepartment" />
              </div>
            </div>
            <div className="col-5 shadow-sm ms-5 w-50 p-3">
              <h3>Địa chỉ liên lạc tại Việt Nam</h3>
              <div className="mb-3">
                <label className="form-label">Tỉnh thành</label>
                <Field className="form-control" name="province" />
                <ErrorMessage className="text-danger" name="province" component="p"></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Quận /huyện</label>
                <Field className="form-control" name="district" />
                <ErrorMessage className="text-danger" name="district" component="p"></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Phường /xã</label>
                <Field className="form-control" name="ward" />
                <ErrorMessage className="text-danger" name="ward"component="p"></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Số nhà, phố, tổ dân phố/ thôn/ đội
                </label>
                <Field className="form-control" name="streets" />
                <ErrorMessage className="text-danger" name="streets" component="p"></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Điện thoại</label>
                <Field className="form-control" name="phone" />
                <ErrorMessage className="text-danger" name="phone" component="p"></ErrorMessage>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <Field className="form-control" name="email" />
                <ErrorMessage className="text-danger" name="email" component="p"></ErrorMessage>
              </div>
            </div>
          </div>
          <div className="shadow-sm p-3 mt-3 row mb-5">
            <div>
              <h3>
                Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia /vùng lãnh thổ
                nào (Có thể đi qua nhiều quốc gia)
              </h3>
              <Field className="form-control mt-3" as="textarea" name="message" />
            </div>
            <div>
              <h3>
                Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào
                sau đây không?
              </h3>
              {tokens.map((token) => (
                <div key={token.id}>
                  <label>
                    <Field
                      type="checkbox"
                      checked={checkToken.includes(token.id)}
                      onChange={() => handleCheckToken(token.id)}
                      name="token"
                    />
                    {token.name}
                  </label>
                </div>
              ))}
            </div>
            <div>
              <h3>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h3>
              {contacts.map((contact) => (
                <div key={contact.id}>
                  <label>
                    <Field
                      type="checkbox"
                      checked={checkContact.includes(contact.id)}
                      onChange={() => handleCheckContact(contact.id)}
                      name="contact"
                    />
                    {contact.name}
                  </label>
                </div>
              ))}
            </div>
            <div className='text-center mt-3'>
                  <button type="submit" className='btn btn-sm btn-primary w-25 '>Khai báo</button>
            </div>
          </div>
         
        </Form>
      </Formik>
    </div>
  );
}

export default DeclarationForm;
