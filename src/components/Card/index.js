import { Container } from "./styles";

import iconMore from "../../assets/teams/iconMore.svg"
import PoPup from "../../components/PoPup";

import { useEffect, useState } from "react";


function Card({
    children,
    disciplinesName,
    teacherName,
    id,
     setPropss,
    }) {

    const [father, setFather] = useState(false);

    if (father) {
        setFather(false)
        setPropss(father)
    }

   // console.log(father);
  
    const [toogle, setToogle] = useState(true);
    const [value, setOpenClose] = useState('none');

    useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');

    }, [toogle]);

    return (
        <Container>
            <div>
                <img
                    src={iconMore}
                    onClick={e => setToogle(state => !state)}
                    alt="Ícone de mais opções"
                />
                <PoPup 
                    display={value} 
                    id={id} 
                    setProps={setFather} 
                />
            </div>
            {children}
            <div>
                <div>{disciplinesName}</div>
                <span>{teacherName}</span>
            </div>
        </Container>
    );
}

export default Card;