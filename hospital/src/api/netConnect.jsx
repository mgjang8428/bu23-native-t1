import net from "./netConfig";
import axios from "axios";

// import { MyHospitalInfo } from "../stores/MyHospitalInfo";

const HOSPITAL_NUM = 1;

export const testGet = () => {
    net.get("test/status")
        .then((Response) => {
            console.log(Response.data);
        })
        .catch((Error) => {
            console.log(Error);
        });
};

export const testPost = () => {
    const tt = { id: 55, userName: "tttttt" };
    net.post("test/", tt)
        .then((response) => {
            // console.log(response.data);
        })
        .catch((error) => {
            //console.log(error);
        });
};

export const getHospitalInfo = async () => {
    let data;
    await net
        .get("info/one/" + HOSPITAL_NUM)
        .then((response) => {
            console.log(response.data);
            data = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    return data;
};

export const postHospitalInfo = async (data) => {
    await net
        .post("info/save/" + HOSPITAL_NUM, data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
