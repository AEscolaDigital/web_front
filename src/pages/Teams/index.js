import Nav from "../../components/Nav";
import Header from "../../components/Header";
import imgMathematics from "../../assets/teams/imgMathematics.svg"
import iconMore from "../../assets/teams/iconMore.svg"
import React from 'react';

import { Container, Section} from "./styles";
import Card from "../../components/Card";

function Teams() {


    const [toogle, setToogle] = React.useState(true);

    const [value, setOpenClose] = React.useState('false');

    React.useEffect(() => {
        setOpenClose(() => toogle ? 'false' : 'true');
    }, [toogle]);

    return (
        <Container>
            <Header />
            <Nav />
            <Section>
                <div>
                    <div>
                        <img src={iconMore} onClick={e => setToogle(state => !state)} />

                         <Card status={value} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>


            </Section>
        </Container>

    );
}

export default Teams;