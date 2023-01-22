import styled from 'styled-components';

export const Table = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    overflow-y: hidden; 
`

export const TitleContainer = styled.div`
    position: relative;
    height: fit-content;
    width: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center; 
    padding: 0px 3vw; 
    border-bottom: 1px solid #000; 
`

export const Title = styled.p`
    height: fit-content; 
    width: ${props => props.width}; 
    padding: 10px 0px; 
    text-align: ${props => props.last ? 'right' : 'left'};
`

export const EntrysContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    overflow-y: scroll; 
`

export const Row = styled.div`
    position: relative;
    height: 50px;
    width: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center;  
    padding: 0px 3vw; 
    border-top: 1px solid #898989; 

    &:first-child {
        border-top: 0px; 
    }

    &:hover {
        background-color: #ececec; 
    }
`

export const Entry = styled.p`
    height: fit-content; 
    width: ${props => props.width}; 
    padding: 3vh 0px; 
    text-align: ${props => props.last ? 'right' : 'left'};
    overflow: hidden; 
`