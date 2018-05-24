import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import soldier from './soldier.png';
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3 "><img src={soldier} alt="logo" /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;