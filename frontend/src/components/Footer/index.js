import './index.css'
import Icon from '../../svg/icon.js'
import { useState } from 'react';

const Footer = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    return(
        <div className="footer-container">
            <div className="container">
                <div className='row-1'>
                    <div >
                        <h2 className='stat-container-header'>JOIN OUR COMMUNITY!</h2>
                        <Icon/>
                    </div>

                    <div className='newsletter-form'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="firstName"></label>
                                    <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your first name"
                                    required
                                    />

                                    <label htmlFor="lastName"></label>
                                    <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter your first name"
                                    required
                                    />
                            </div>

                            <label htmlFor="email">Email:</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your first name"
                            required
                            />
                            <button className="suscribe-button" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='row-2'></div>
                <div className='row-3'></div>
            </div>
        </div>
    )
}

export default Footer