import styled from "styled-components"

export const Constraints  = styled.div`
width: 100%;
max-width: ${({Max}) => Max ? Max : "90%"};
margin: 0 auto;
`

export const Button1  = styled.div`
   background-color: white;
    color: #412272;
    border: 1px solid transparent;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
      0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-in-out, color 0.15s ease-in-out,
      background-color 0.5s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

      &:hover {
           box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: white;
    background-color: #412272;
    border: 2px solid #412272;
      }

`

export default Constraints  ;