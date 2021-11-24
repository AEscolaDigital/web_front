import axios from "axios";

export const api = axios.create({
    baseURL: "https://educ-tec-back-end.herokuapp.com/",
});

export const apiViaCep = axios.create({
    baseURL: "https://viacep.com.br/ws/",
})

