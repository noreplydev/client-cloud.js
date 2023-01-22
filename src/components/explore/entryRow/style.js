import styled from 'styled-components'

export const Row = styled.div`
    position: relative;
    height: fit-content;
    width: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center;  
    padding: 0px 3vw; 
    border-top: 1px solid #bdbdbd; 
    transition: all .15s ease-in-out;

    &:first-child {
        border-top: 0px; 
    }

    &:hover {
        background-color: #F2F2F2; 
        cursor: pointer; 
    }
`
 
export const Entry = styled.div`
    height: fit-content; 
    width: ${props => props.width}; 
    padding: 3vh 0px; 
    text-align: ${props => props.last ? 'right' : 'left'};
    overflow: hidden; 
`

export const Img = styled.img`
    height: .7rem; 
    width: auto; 
    margin-right: 10px; 
`