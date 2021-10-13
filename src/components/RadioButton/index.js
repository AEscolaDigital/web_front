import { Container } from "./styles"

function RadioButton({ idInput, name, value, text, forLabel, handler, checked }) {
    return (
        <Container>
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