import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 74rem;
    height: calc(100vh - 10rem);

    margin: 5rem auto;
    border-radius: 8px;
    padding: 4rem;

    background-color: ${props => props.theme["gray-800"]};

    display: flex;
    flex-direction: column;    
`