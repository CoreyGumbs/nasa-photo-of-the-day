import React from 'react';
import nasaLogo from '../../imgs/nasa-logo.png'
import {HeaderLogoContainer, LogoImg } from './StyledComponents/HeaderStyles';


const Logo = () =>{
    return(
        <HeaderLogoContainer>
            <LogoImg src={nasaLogo} alt="NASA Logo" />
       </HeaderLogoContainer>
    )
}

export default Logo;