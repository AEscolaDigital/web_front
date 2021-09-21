import { Container, Card } from "./styles";
import profile from "../../assets/header/profile.png"
import iconeMagnifier from "../../assets/header/iconeMagnifier.svg"
import configurationIcon from "../../assets/header/configurationIcon.svg"
import puzzleIcon from "../../assets/header/puzzleIcon.svg"
import downloadIcon from "../../assets/header/downloadIcon.svg"
import iconExit from "../../assets/header/iconExit.svg"
import React from 'react';

function Header() {

    const [toogle, setToogle] = React.useState(true);
    const [value, setOpenClose] = React.useState('none');
    const [valueHeight, setHeight] = React.useState('0px');

    React.useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
        setHeight(() => toogle ? '0px' : '365px');
    }, [toogle]);

    return (
        <Container>
            <div></div>
            <div>
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">
                    <img src={iconeMagnifier} />
                </button>
            </div>

            <img src={profile} onClick={e => setToogle(state => !state)} ></img>

            <Card style={{
                height: valueHeight,
            }}>
                <div style={{
                    display: value,
                }} >
                    <img src={profile} />
                    <div>Jaqueline Silva</div>
                    <div>jaqueline@gmail.com</div>
                    <hr/>
                    <a>
                        <div>
                            <img src={configurationIcon} />
                        </div>
                        <div>Configuraçãoes</div>
                    </a>
                    <a>
                        <div>
                            <img src={puzzleIcon} />
                        </div>
                        <div>Atalhos</div>
                    </a>
                    <a>
                        <div>
                            <img src={downloadIcon} />
                        </div>
                        <div>Dowload do aplicativo</div>
                    </a>
                    <hr/>
                    <a>
                        <div>
                            <img src={iconExit} />
                        </div>
                        <div>Saída</div>
                    </a>
                </div>
            </Card>
        </Container>
    );
}

export default Header;