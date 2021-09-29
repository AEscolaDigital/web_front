import { Container } from "./styles"


function CheckBox() {
    return (
        <Container>
            <ul>
                <li>    
                    <input type="checkbox" id="checkboxOne" value="Rainbow Dash"/>
                    <label for="checkboxOne">Rainbow Dash</label>
                </li>
            </ul>
        </Container>
    );
}

export default CheckBox;