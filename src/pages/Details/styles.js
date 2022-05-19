import styled from 'styled-components'

export const Container = styled.div`
    
    .movie{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .movie img{
        height: 50vh;
        background-size: cover;
        border-radius: 20px;
    }
    .details{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }
    .details span{
        width: 50%;
    }
    .btn{
        width: 100%;
        padding: 2%;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ;
    }

    .btn:hover{
        opacity: 0.9;
    }
`