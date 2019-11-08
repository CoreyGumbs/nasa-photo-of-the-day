import React from 'react';
import Logo from './Logo';
import HeaderTitle  from './HeaderTitle';
import { MainHeader, HeaderContainer } from './StyledComponents/HeaderStyles';

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