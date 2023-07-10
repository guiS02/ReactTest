import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #24292E;
    gap: 1rem;
    border-radius: 3rem;
    height: 20rem;
    width: 30rem;
    margin: auto;
    margin-top: 3rem;
    box-shadow: 3px 3px 7px 1px #2a2a2a;

    div {
        background: none;
    }

    input {
        margin-left: 2.1rem;
        border: none;
        text-align: center;
        border-radius: 1rem;
        margin-right: .7rem;
        padding: 0.2rem;
    }

    button {
        padding: 0.4rem;
        border: none;
        cursor: pointer;
        border-radius: .700rem;
        background-color: white;
    }

    h2 {
        background-color: #24292E;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 1.3rem;
    }
    img {
        width: 6rem;
        background-color: transparent;
    }
`
    
