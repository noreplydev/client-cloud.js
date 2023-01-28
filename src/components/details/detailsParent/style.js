import styled from "styled-components";

export const Parent = styled.section`
  height: 100%;
  min-width: 25%;
  max-width: 25%;
  padding-inline: 2vw; 
`
export const Filename = styled.p`
  height: fit-content;
  width: 100%;
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  font-weight: 500;
  padding-bottom: 10px; 
  margin-bottom: 6vh; 
  border-bottom: 1px solid #000;
`

export const Title = styled.p`
  height: fit-content;
  width: fit-content; 
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  font-weight: 500;
  margin-bottom: 2vh; 
  border-bottom: 1px solid #000;
`

export const Text = styled.p`
  height: fit-content;
  width: 100%; 
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  font-weight: 500;
  margin-bottom: 10px; 
  color: #898989; 
  word-break: break-all; 
`