import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UsersModal.css'

const UsersModal = ({ onClose }) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [positionX, setPositionX] = useState('');
    const [positionY, setPositionY] = useState('');
    const notify = (message) => toast(message);

    const fadeIn = useSpring({
        opacity:  1,
        from: { opacity: 0, },
    });

    const handleClose = () => {
        const formData = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            positionX: positionX,
            positionY: positionY
        };
        if (!(nameInput || emailInput || phoneInput || positionX || positionY)) {
            notify("Por favor, preencha todos os campos!");
        }

        onClose(formData);
    };

    const handleIconClose = () => {
        onClose(null);
    };

    return (
        <>
            <div className="modal-container">
                <ToastContainer theme="dark" />
                <animated.div style={fadeIn} className="user-modal-wrapper">
                    <h3 className='form-title'>Cadastro de Clientes</h3>
                    <span className='close-icon' onClick={handleIconClose}>X</span>
                    <div className='form-wrapper'>
                        <div>
                            <label>Nome</label>
                            <input 
                                type="text"
                                placeholder="Insira o nome"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input 
                                type="email"
                                placeholder="Insira o email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input 
                                type="text"
                                placeholder="Insira o telefone"
                                value={phoneInput}
                                onChange={(e) => setPhoneInput(e.target.value)}
                            />
                        </div>
                        <div className='position-wrapper'>
                            <input 
                                type="text"
                                placeholder="Insira a posição X"
                                value={positionX}
                                maxLength={15}
                                onChange={(e) => setPositionX(e.target.value)}
                            />
                            <input 
                                type="text"
                                placeholder="Insira a posição Y"
                                value={positionY}
                                maxLength={15}
                                onChange={(e) => setPositionY(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={handleClose}>Salvar</button>
                </animated.div>
            </div>
        </>
    )
}

export default UsersModal;