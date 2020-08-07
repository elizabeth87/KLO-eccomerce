import styled from 'styled-components';

export const ButtonContainer = styled.button
`text-transform:capitalize;
font-size:1.4rem;
background-color: orange;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
margin-bottom: 20px;
transition: all 0.5s ease-in-out;
&:hover{
    background: rgb(28, 165, 189);
    color: black;
}
&:focus {
    outline: none;
}
` 