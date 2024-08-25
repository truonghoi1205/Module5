import axios from "axios";

const URL_STUDENT = "http://localhost:8080/students"

export const getAllStudents = async (name, classroomId, minPoint, maxPoint) => {
    try {
        let url = `http://localhost:8080/students?_expand=classroom`;
        if (name) {
            url += `&name_like=${name}`;
        }
        if (classroomId) {
            url += `&classroomId=${classroomId}`;
        }
        if (minPoint !== "" && maxPoint !== "") {
            url += `&point_gte=${minPoint}&point_lte=${maxPoint}`;
        }
        
        let res = await axios.get(url);
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveStudent = async (student) => {
    try {
        await  axios.post(URL_STUDENT, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const deleteStudent = async (id) => {
    try {
        await axios.delete(URL_STUDENT+"/"+ id)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const updateStudent = async (student) => {
    try {
        await axios.put(URL_STUDENT + "/" + student.id, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const findStudentById = async (id) => {
    try {
        let res = await axios.get(URL_STUDENT+"/"+id)
        return res.data
    } catch (e) {
        return []
    }
}