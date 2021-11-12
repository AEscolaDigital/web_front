import { Container } from "./styles"
import check_icon from "../../assets/radioButton/check_icon.png"
import icon_more from "../../assets/radioButton/icon_more.png"

function RadioButton({ idInput, name, value, text, forLabel, handler, checked }) {
    return (
        <Container srcMore={icon_more} srcCheck={check_icon} >
            <ul>
                <li>
                    <input
                        type="radio"
                        checked={checked}
                        id={idInput}
                        value={value}
                        name={name}
                        onChange={handler}
                        required
                    />
                    <label for={forLabel} > {text} </label>
                </li>
            </ul>
        </Container>
    );
}

export default RadioButton;