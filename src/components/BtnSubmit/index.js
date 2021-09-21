import { Container } from "../Nav/styles";
import { Link } from "react-router-dom";
import { A } from "./styles";

function BtnSubmit({text}){

    return(
        <A> {text} </A>
    );
}

export default BtnSubmit;