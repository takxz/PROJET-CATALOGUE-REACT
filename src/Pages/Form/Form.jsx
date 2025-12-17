import { useRef, useState } from 'react';
import Input from '../../Components/Input/Input';
import './Form.css';


export default function Form({}) {

        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const searchButtonRef = useRef();

        const sendForm = () => {
            console.log(email);
            console.log(message);
        }
    return (
        <div className='container-form'>
            <h1>Formulaire de contact</h1>
            <Input id="email" label="Email" type="email" name="email" onKeyUp={(value) => {setEmail(value)}} format={/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/} errorMessage="Veuillez entrer un email valide" submitRef={searchButtonRef} />
            <label htmlFor="message">Votre message :</label>
            <textarea id="message" name="message" rows="5" cols="33" onKeyUp={(e) => setMessage(e.target.value)}></textarea>
            <button onClick={sendForm} ref={searchButtonRef}>Envoyer</button>
        </div>
    )
}