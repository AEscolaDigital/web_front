import Nav from "../../components/Nav";
import Header from "../../components/Header";
import imgMathematics from "../../assets/teams/imgMathematics.svg"
import iconMore from "../../assets/teams/iconMore.svg"

import { Container, Section } from "./styles";

function Teams() {
    return (
        <Container>
            <Header/>
            <Nav/>
            <Section>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>
                    <img src={imgMathematics} />
                    <div>
                        <div>Matemática</div>
                        <div>Prof. Guilherme</div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </Section>
        </Container>

    );
}

export default Teams;
