import axios from "axios";

const URL_CLASSROOM = "http://localhost:8080/classrooms"

export const getAllClassrooms = async () => {
    try {
        let res = await axios.get(URL_CLASSROOM);
        return res.data;
    } catch (e) {
        return []
    }
}