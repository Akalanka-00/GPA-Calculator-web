import axios  from "axios";

export default axios.create({
   // baseURL: "http://localhost:8000",
    baseURL:"http://192.168.1.26:8000",
  });