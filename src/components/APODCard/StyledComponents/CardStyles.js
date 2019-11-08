import styled from 'styled-components';


export const ContentContainer = styled.section`
    width: 70%;
    margin: 50px auto;
    padding: 0;
`;

export const LoadingComponent = styled.h3`
    width: 50%;
    margin: 25% auto;
    font-size: 7rem;
`;

export const CardTitleContainer = styled.section`
    margin-bottom: 100px;
`;

export const CardTitleHeading = styled.h1`
    margin: 0 auto;
    padding: 20px 0;
    font-size: 5rem;
    color: #0B3C91;
    border-bottom: 1px solid black;
`;

export const CardTitleSubHeading = styled.h2`
    font-size: 2.5rem;
    color: #999;
`;

export const DatePickerContainer = styled.section`
    margin: 20px 0;
    padding: 10px 20px;
    background-color: #eee;
    border: 1px solid #777;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

export const DatePickerText = styled.p`
    font-size: 1.5rem;
    padding: 0;
    color: #777;

`;

export const DatePickerInputContainer = styled.div`
    width: 75%;
    margin: 0;
    padding: 0;
    font-size: 5rem;
    color: grey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const CardImageContainer =  styled.section`
    width: 100%;
`;

export const CardImageOfDay = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const CardImgSource = styled.p`
    font-size: 2rem;
`;

export const CardImgSourceLink = styled.a`
    font-size: 2rem;
    text-decoration: none;
`;


export const CardInfoContainer =  styled.section`
    width: 100%;
    margin: 50px 0;
    border: 1px solid #0B3C91;
    border-radius: 10px;
`;

export const CardInfoText = styled.p`
    padding: 20px 50px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 2rem;
    line-height: 2;
    color: #333;
`;