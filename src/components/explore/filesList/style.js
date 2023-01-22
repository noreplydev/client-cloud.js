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
    font-family: 'dm-mono-semibold', monospace;
    font-weight: 500; 
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