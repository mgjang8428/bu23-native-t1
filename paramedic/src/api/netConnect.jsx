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
        number: 0,
        name: "",
        adress: "",
        lat: 0,
        lng: 0,
        availablePaitientCount: 0,
        maxPatientConut: 0,
        open: false,
        status: false,
    };
    let data;
    try {
        await net
            .get("/info/list")
            .then((response) => {
                data = response.data;
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (e) {
        console.log(e);
    }

    // console.log(response.data);

    return data;

    // .then((response) => {
    //     data = response.data;
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
    console.log(response);

    //return data;
};

export const postRequest = async (send) => {
    await net
        .post("request/save", send)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
