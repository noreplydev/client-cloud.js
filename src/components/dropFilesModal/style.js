import styled from 'styled-components'; 

export const ModalContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  position: relative; 
  height: fit-content; 
  width: fit-content; 
  border-radius: 4vh; 
  padding: 5vh; 
  background-color: #fff;
  animation: appearModal .15s ease-in-out; 

  &:hover {
    box-shadow: inset 0px 0px 0px 1px #0055ff; 
  }

  &:hover #drop-file {
    display: none; 
  }

  &:hover #drop-file-hover {
    display: block;
  }

  @keyframes appearModal {
    0% {
      opacity: 0;
      scale: 0.5; 
    } 100% {
      opacity: 1;
      scale: 1; 
    }
  }
`

export const Form = styled.form`
  height: 100%; 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  display: none;
`

export const ImageWrapper = styled.div`
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  padding: 5vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  height: 70%;
  width: auto;
`

export const ImgHover = styled.img`
  display: none;
  height: 100%;
  width: auto;
  animation: appearImg .15s ease-in-out;

  @keyframes appearImg {
    0% {
      opacity: 0;
      scale: 0.5;
    } 100% {
      opacity: 1;
      scale: 1;
    }
  }
`

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace; 
`