import Header from "../../components/Header";
import Nav from "../../components/Nav";

import {
    ContainerTitle,
    ContainerCard,
    Card
} from "./styles";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getUserRole } from "../../services/security";
import { Link } from "react-router-dom";


function Grades() {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        let loadclasses = async () => {
            try {
                const response = await api.get(`/classes/1`);

                setClasses(response.data.rows)

            } catch (error) {
                // httpError503(error.response);
            }
        };

        if (getUserRole() !== "ROLE_USER") {
            loadclasses();
        }

    }, []);

    return (
        <>
            <Header />
            <Nav />
            <ContainerTitle>
                <h1>Escolha uma classe</h1>
                <h2>Para o lançamento de notas</h2>

            </ContainerTitle>
            <ContainerCard>
                {classes.map(classe =>
                    <Card>
                        <Link to="castCrates" >
                            <img src={classe.image} alt="Classe" />
                            <div class="data">
                                <h1>{classe.sigla}</h1>
                                <p>{classe.course_name}</p>
                            </div>
                        </Link>
                    </Card>
                )}
            </ContainerCard>
        </>
    )

}

export default Grades;