import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Raleway:400&display=swap');
    

    * {
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    .react-datepicker__input-container input{
        width: 500px;
        margin: 0 auto;
        padding: 5px 10px;
        border-radius: 5px;
    }
`;


export default GlobalStyle;


