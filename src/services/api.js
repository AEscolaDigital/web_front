import axios from "axios";

export const api = axios.create({
    baseURL: "https://school-backend-eductec.herokuapp.com/"
});

export const apiViaCep = axios.create({
    baseURL: "https://viacep.com.br/ws/",
})

