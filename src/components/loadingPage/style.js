import  styled from 'styled-components'

export const Blank = styled.div`
  position: absolute;
  top: 0; 
  left: 0; 
  height: 100%;
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background-color: #fff; 
  animation: fadeIn 3s ease-in-out forwards;
  z-index: 1000;

  @keyframes fadeIn {
    0% {
      opacity: 1;
      visibility: visible; 
    } 90%{
      opacity: 1;
      visibility: visible; 
    }100% {
      opacity: 1;
      visibility: hidden; 
    }
  }
` 

export const Animation = styled.div`
  position: relative; 
  height: fit-content; 
  width: fit-content;
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;  
  margin-bottom: 20px; 
`

export const Img = styled.img`
  height: 19px; 
  width: auto; 
  z-index: 2; 
`

export const Data = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  font-size: 0.6rem;
  animation: transfer 1s linear infinite;
  z-index: 1;

  @keyframes transfer {
    10% {
      opacity: 0; 
      bottom: 0;
      left: 0;
    } 50% {
      opacity: 1; 
      bottom: 60%;
      left: 40%;
    } 85% {
      opacity: 0;
    }100% {
      bottom: 0;
      left: 100%;
    }
  }
`

export const Text = styled.p`
  font-size: 1rem;
  color: ${props => props.color ? props.color : '#000'};
  margin-bottom: 10px; 
`