import { Container } from "../Nav/styles";
import { Link } from "react-router-dom";
import { Button } from "./styles";

function BtnSubmit({text}){

    return(
        <Button> {text} </Button>
    );
}

export default BtnSubmit;