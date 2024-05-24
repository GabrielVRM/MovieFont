import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:root{
    font-size: 62.5%;
} 
body, button, a{

    font-family:'roboto slab', serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color:  ${({ theme }) => theme.COLORS.WHITE};

}


a{
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

`;
