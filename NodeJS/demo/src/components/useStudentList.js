
import { useState, useEffect } from "react";
import * as studentService from "../service/StudentService";
import * as classroomService from "../service/ClassroomService";
import { toast } from "react-toastify";

const useStudentList = (page, limit, name, selectedClassroomId, minPoint, maxPoint) => {
  const [students, setStudents] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const data = await classroomService.getAllClassrooms();
        setClassrooms(data);
      } catch (error) {
        toast.error("Không thể tải lớp học.");
      }
    };
    fetchClassrooms();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data, total } = await studentService.getAllStudents(
          name,
          selectedClassroomId,
          minPoint,
          maxPoint,
          page,
          limit
        );
        setStudents(data);
        setTotalStudents(total);
      } catch (error) {
        toast.error("Không thể tải học sinh.");
      }
    };
    fetchStudents();
  }, [page, name, selectedClassroomId, minPoint, maxPoint]);

  return { students, classrooms, totalStudents };
};

export default useStudentList;
