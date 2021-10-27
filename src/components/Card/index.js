import { Container } from "./styles";
import imgMathematics from "../../assets/teams/imgMathematics.svg"
import iconMore from "../../assets/teams/iconMore.svg"
import PoPup from "../../components/PoPup";
import React from 'react';


function Card({ children }) {

    const [toogle, setToogle] = React.useState(true);
    const [value, setOpenClose] = React.useState('none');

    React.useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
    }, [toogle]);

    return (
        <Container>
            <div>
                <img src={iconMore} onClick={e => setToogle(state => !state)} alt="Ícone de mais opções" />
                <PoPup display={value} />
            </div>
            {children}
            <div>
                <div>Matemática</div>
                <span>Prof. Guilherme</span>
            </div>
        </Container>
    );
}

export default Card;