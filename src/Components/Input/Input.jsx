import { useState } from 'react';
import './Input.css';

export default function Input({ label, id, type, name, onKeyUp, format, errorMessage, submitRef}) {

    const [error, setError] = useState(true);


    const handleKeyUp = (value) => {
        if(!format.test(value)){
            setError(true);
            submitRef.current.disabled = true;
        }else{
            setError(false);
            submitRef.current.disabled = false;
        }
        onKeyUp(value);
    }

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} onKeyUp={(e) => handleKeyUp(e.target.value)} onFocus={focus}/>
            {error &&
                <div className="error">{errorMessage}</div>
            }
        </div>


    )
}