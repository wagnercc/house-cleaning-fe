import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './NearestCustomers.css'

const NearestCustomers = ({ onClose, customerList }) => {
    const [customerListData, setCustomerListData] = useState([]);

    useEffect(() => {
        setCustomerListData(customerList);
    }, customerList)

    const fadeIn = useSpring({
        opacity:  1,
        from: { opacity: 0, },
    });

    const handleIconClose = () => {
        onClose(null);
    };

    console.log('customer', customerList);

    return (
        <>
            <div className="modal-container">
                <animated.div style={fadeIn} className="modal-wrapper">
                    <span className='close-icon' onClick={handleIconClose}>X</span>
                    <h3 className='form-title'>Rota de Clientes</h3>
                    <div className='form-wrapper'>
                        { customerListData.map((item, index) => (
                            <>
                                <div className='card-wrapper'>
                                    <div className='card-header'>
                                        { item.name }
                                    </div>
                                    <div className='card-content'>
                                        <p>Posição X: <strong>{ item.x }</strong></p>
                                        <p>Posição Y: <strong>{ item.y }</strong></p>
                                    </div>
                                </div>
                                { index <= customerListData.length - 2 &&
                                    <span className='card-separator'></span>
                                }
                            </>
                        )) }
                    </div>
                </animated.div>
            </div>
        </>
    )
}

export default NearestCustomers;