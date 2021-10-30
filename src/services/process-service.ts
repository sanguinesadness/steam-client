import axios from "axios";
import { API_URL } from "../constants/api-url";

class ProcessService {
    static start = () => {
        return axios.post(`${API_URL}/process/start`);
    }
}

export default ProcessService;