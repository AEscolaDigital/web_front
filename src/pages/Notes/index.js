import Header from "../../components/Header";
import Nav from "../../components/Nav";

import {
    ContainerTitle,
    ContainerCard,
    Card,
} from "./styles";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getUserRole } from "../../services/security";
import { useHistory } from "react-router-dom";

function Notes() {

    const history = useHistory();

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

    const [classe, setClasse] = useState([]);


    const handleSumibCastCrates = async (e) => {
        e.preventDefault();

        try {
            history.push({
                pathname: `/CastNote`,
                state: {
                    classe: classe,
                }
            })

        } catch (error) {
            console.log(error);
        }

    }



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
                    <form onSubmit={handleSumibCastCrates} >
                        <button 
                            onClick={() => setClasse(classe)}>
                            <Card>
                                <img src={classe.image} alt="Classe" />
                                <div class="data">
                                    <h1>{classe.sigla}</h1>
                                    <p>{classe.course_name}</p>
                                </div>
                            </Card>
                        </button>
                    </form>
                )}
            </ContainerCard>
        </>
    )

}

export default Notes;