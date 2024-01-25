import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './UsersModal.css'

const UsersModal = ({ onClose }) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');

    const fadeIn = useSpring({
        opacity:  1,
        from: { opacity: 0, },
    });

    const handleClose = () => {
        const formData = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput
        };

        onClose(formData);
    };

    const handleIconClose = () => {
        onClose(null);
    };

    return (
        <>
            <div className="modal-container">
                <animated.div style={fadeIn} className="modal-wrapper">
                    <span className='close-icon' onClick={handleIconClose}>X</span>
                    <div className='form-wrapper'>
                        <input 
                            type="text"
                            placeholder="Insira o nome"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                        <input 
                            type="email"
                            placeholder="Insira o email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Insira o telefone"
                            value={phoneInput}
                            onChange={(e) => setPhoneInput(e.target.value)}
                        />
                    </div>
                    <button onClick={handleClose}>Salvar</button>
                </animated.div>
            </div>
        </>
    )
}

export default UsersModal;