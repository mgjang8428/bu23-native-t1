import net from "./netConfig";
import axios from "axios";

export const testGet = () => {
    net.get("test/hihi")
        .then((Response) => {
            //console.log(Response.data);
        })
        .catch((Error) => {
            //console.log(Error);
        });
};

export const testPost = () => {
    const tt = { id: 55, userName: "tttttt" };
    net.post("test/", tt)
        .then((response) => {
            //console.log(response.data);
        })
        .catch((error) => {
            //console.log(error);
        });
};

export const getAllHospitalInfo = async () => {
    const hospitalInfoObj = {
        hospitalNum: 0,
        hospitalName: "",
        hospitalAdress: "",
        hospitalLat: 0,
        hospitalLng: 0,
    };
    let response;
    try {
        response = await net.get("/info/all").catch((error) => {
            console.log(error);
        });
    } catch (e) {
        console.log(e);
    }

    console.log(response.data);

    return response.data;

    // .then((response) => {
    //     data = response.data;
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
    console.log(response);

    //return data;
};
