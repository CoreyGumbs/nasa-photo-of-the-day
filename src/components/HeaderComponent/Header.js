import React from 'react';
import Logo from './Logo';
import HeaderTitle  from './HeaderTitle';
import {MainHeader} from './HeaderStyles';

 const Header = () => {
     return(
        <MainHeader>
            <div className="header-container">
                <Logo />
                <HeaderTitle />
            </div>
        </MainHeader>
     )
 }

 export default Header;