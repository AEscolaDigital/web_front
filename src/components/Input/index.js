import { useCallback } from "react";
import { Container } from "./styles";
import { cep, currency, cpf, phone } from "./masks";

function Input({
    id,
    value,
    handler,
    label,
    width,
    type,
    colorLabel,
    className,
    pattern,
    name,
    maxlength,
    mask,
    ...rest }) {

    const handleKeyUp = useCallback((e) => {

        if (mask === 'cep') {
            cep(e);
        }
        if (mask === 'currency') {
            currency(e);
        } 
        if (mask === 'cpf') {
            cpf(e);
        } 
        if (mask === 'phone') {
            phone(e)
        }
        
    }, [mask]);

    return (
        <Container>
            <label>
                <input style={{
                    width: width,
                }}
                    id={id}
                    value={value}
                    placeholder=" "
                    onChange={handler}
                    type={type}
                    pattern={pattern}
                    name={name}
                    maxlength={maxlength}
                    {...rest}
                    onKeyUp={handleKeyUp}
                    mask={mask}
                />
                <span className={className} style={{
                    backgroundColor: colorLabel,
                }
                } >{label}</span>
            </label>
        </Container>
    );
}

export default Input;