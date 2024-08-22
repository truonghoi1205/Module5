import axios from "axios";

export const getAllTodo = async () => {
    try {
        let res = await axios.get("http://localhost:8080/list");
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveTodo = async (job) => {
    try {
        await  axios.post("http://localhost:8080/list", job)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}