import axios from "axios";

const net = axios.create({
    baseURL: "http://192.168.150.100:8080/",
});

export default net;
