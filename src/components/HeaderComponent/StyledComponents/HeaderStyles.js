import styled from 'styled-components';

export const MainHeader =  styled.header`
    width: 100%;
    margin: 0 auto;
    padding: 0;
    background-color: #ccc;
`;

export const HeaderContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    align-items: center;
`;
 
export const HeaderLogoContainer =  styled.div`
    width: 50%;
    padding: 0;

`;

export const LogoImg = styled.img`
    margin: 0;
    padding: 0;
    width: 40%;
    height: 40%;

`;

export const HeaderTitleContainer = styled.div`
    width: 50%;    
   
    display: flex;
    justify-content: flex-end;
`;

export const HeadingTitle = styled.h1`
    font-size: 5rem;
`;

