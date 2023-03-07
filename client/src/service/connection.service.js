import axios from "axios";
import { getLocalStorageValue } from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:9001/connection",
  headers: {
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token"),
  },
});

const sendConnectionRequestById = async (id) => {
  try {
    const response = await api.post("/request/" + id);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

const getAllConversations = async () => {
  try {
    const response = await api.get("/all");
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

// const approveConnectionById = async (id) => {
//   try {
//     const response = await api.put("/request/" + id);
//     return response.data;
//   } catch (error) {
//     return Promise.reject(error.response.data);
//   }
// };

const connectionService = {sendConnectionRequestById, getAllConversations};
export default connectionService;
