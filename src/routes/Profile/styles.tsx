import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 80rem;
    margin-left: 23.8rem;
    margin-top: 2.2rem;


    .tabs{
        margin-left: 2rem;

    }

    .user{
        width: 14rem;
        margin-left: .5rem;
    }

    .photo {
        border-radius: 15rem;
        width: 150px;
        margin: auto;
    }

    .userName {
        margin-top: 1.1rem;
        text-align: center;
        font-weight: 700;
        font-size: 1.3rem;
    }

    .userBio {
        margin-top: .1rem;
        text-align: center;
        font-size: 15px;
        color: #989898;
        font-weight: 500;

    }

    ul {
        margin-top: 1.85rem;
    }

    .userDescription {
        margin-top: 0.7rem;
        list-style: none;
        font-size: .860rem;
        color: #389FFF;
        font-weight: 600;
    }

    .repoDescript {
        list-style: none;
        color: #989898;
        font-size: .900rem;
        margin-top: .270rem;
        margin-bottom:.4rem;
    }

    .repoName {
        list-style: none;
        font-weight: 400;
        text-transform: capitalize;
        font-size: 1.1rem;
    }

    .repoLang {
        list-style: none;
        font-weight: 600;
        font-size: .850rem;
        margin-top: .270rem;
        display:flex;
        flex-direction: row;
    }

    hr {
        margin-top: 1.6rem;
    }

    .icons {
        margin-right: .3rem;
        margin-left: 3.5rem;
        margin-top: .150rem;
    }
    .public {
        margin-left: .4rem;
        color: #0687FF;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .inputSearch {
        margin-top: 1.5rem;
        flex-direction: row;
        display:flex;
    }
    
    .input{
        width: 25rem;
    }
    .filter{
        flex-direction: row;
        display:flex;
        margin-left: 5rem;
        
    }
`