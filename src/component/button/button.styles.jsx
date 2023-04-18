import styled from "styled-components";

export const BaseButton = styled.button`
   min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    justify-content: center;

    &:hover {
      background-color: rgb(224, 217, 217);
      color: black;
      border: 1px solid rgb(41, 37, 37);
      box-shadow: 0 12px 10px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }

`
export const GoggleSignInButton = styled(BaseButton)`
  background-color: #357ae8;
      color: white;

      &:hover {
        background-color: #92c8dd;
        border: none;
        box-shadow: 20px 20px 50px 10px lightblue inset;
      }
`

export const InvertedButton = styled(BaseButton)`
      background-color: white;
      color: black;
      border: 0.5px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`