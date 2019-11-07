import React from 'react';
import nasaLogo from '../../imgs/nasa-logo.png'
import {HeaderLogo} from './HeaderStyles';


const Logo = () =>{
    return(
        <HeaderLogo>
             <img className="header-logo" src={nasaLogo} alt="Nasa Logo" width='50%' height='10%'/>
       </HeaderLogo>
    )
}

export default Logo;