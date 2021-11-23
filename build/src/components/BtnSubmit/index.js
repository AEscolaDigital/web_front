import { Button } from "./styles";

function BtnSubmit({ text, width }) {

    return (
        <>
            <Button style={{
                width
            }} > {text} </Button>
        </>
    );
}

export default BtnSubmit;