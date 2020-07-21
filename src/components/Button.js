import styled from 'styled-components';

export const ButtonContainer = styled.button
`text-transform:capitalize;
font-size:1.2rem;
background:transparent;
border-radius: 0.1rem;
padding: 0.1rem 0.2rem;
cursor: pointer;
margin: 3px;
transition: all 0.5s ease-in-out;
&:hover{
    background: rgb(28, 165, 189);
    color: black;
}
&:focus {
    outline: none;
}
` 