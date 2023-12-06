import net from "./netConfig";
//import axios from "axios";

export const testGet = () => {
    net.get("test/hihi")
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
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
