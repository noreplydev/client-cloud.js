import styled from 'styled-components'

export const Container = styled.div`
  height: fit-content; 
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: flex-start; 
`

export const Title = styled.p`
  font-size: 1rem;
  font-family: 'dm-mono-medium'; 
  text-decoration: underline; 
`

export const SizeLineWrapper = styled.div`
  height: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #ececec; 
  margin-top: 15px; 
  margin-bottom: 5px;
`

export const SizeLine = styled.div`
  height: 100%; 
  width: ${props => props.width};
  background-color: #000; 
`

export const SizesText = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`
export const Size = styled.p`
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  color: ${props => props.color};
`