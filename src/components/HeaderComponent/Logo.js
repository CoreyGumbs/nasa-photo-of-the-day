import React from 'react';
import nasaLogo from '../../imgs/nasa-logo.png'


const Logo = () =>{
    return(
        <div className="logo-container">
             <img className="header-logo" src={nasaLogo} alt="Nasa Logo" width='80%' height='40%'/>
       </div>
    )
}

export default Logo;