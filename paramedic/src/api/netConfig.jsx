import axios from "axios";

const net = axios.create({
    // baseURL: "http://192.168.150.100:8080/",
    baseURL: "http://hlm-nas.duckdns.org:7003",
});

export default net;
