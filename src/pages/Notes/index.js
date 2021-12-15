import Header from "../../components/Header";
import Nav from "../../components/Nav";
import PermissionComponent from "../../components/PermissionComponent";

import {
    ContainerTitle,
    ContainerCard,
    Card,
} from "./styles";

import boletim from "../../assets/Boletim_20272596.pdf";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

function Notes() {

    const history = useHistory();

    const [classes, setClasses] = useState([])

    console.log(classes);

    useEffect(() => {
        let loadclasses = async () => {
            try {
                const response = await api.get(`/classes/1`);

                setClasses(response.data.rows)

            } catch (error) {
                // httpError503(error.response);
            }
        };

        loadclasses();
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

                <PermissionComponent role="ROLE_ADMIN,ROLE_TEACHER" >
                    <h2>Para o lançamento de notas</h2>
                </PermissionComponent>

                <PermissionComponent role="ROLE_USER" >
                    <h2>Para o fazer o dowload do boletim</h2>
                </PermissionComponent>

            </ContainerTitle>

            <PermissionComponent role="ROLE_USER" >

                <ContainerCard>
                    {classes.map(classe =>
                        <a href={boletim} download>

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
                        </a>
                    )}
                </ContainerCard>

            </PermissionComponent>

            <PermissionComponent role="ROLE_ADMIN,ROLE_TEACHER" >
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
            </PermissionComponent>

        </>
    )

}

export default Notes;