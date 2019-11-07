import React from 'react';
import Logo from './Logo';
import HeaderTitle  from './HeaderTitle';
import {MainHeader, HeaderContainer} from './HeaderStyles';

 const Header = () => {
     return(
        <MainHeader>
            <HeaderContainer>
                <Logo />
                <HeaderTitle />
            </HeaderContainer>
        </MainHeader>
     )
 }

 export default Header;