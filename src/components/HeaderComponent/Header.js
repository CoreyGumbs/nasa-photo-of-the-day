import React from 'react';
import Logo from './Logo';
import HeaderTitle  from './HeaderTitle';

 const Header = () => {
     return(
        <header className="header">
            <div className="header-container">
                <Logo />
                <HeaderTitle />
            </div>
        </header>
     )
 }

 export default Header;