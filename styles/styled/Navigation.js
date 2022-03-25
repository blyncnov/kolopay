import styled from "styled-components"

export const NavigationContainer  = styled.div`
width: 100%;
background-color: white;
box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: #333;
`

export const NavigationWrapper  = styled.div`
width: 100%;
padding: 1.2em 0;
color: #333;
background-color: transparent;

// FlexBox property

display: flex;
justify-content: space-between;
align-items: center;

.Logo{
      cursor: pointer;
}

@media (max-width: 768px) {
    padding: .8em 0;
}
`

export const NavigationItem  = styled.ul`
display: flex;
gap: 2em;
align-items: center;

li{
    font-weight: 520;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: helvetica;
    color: #333 !important;
    transition: all 0.5s ease-in-out;
}

li:hover{
    color: #412272;
    transform: scale(1.1);
}

@media (max-width: 1100px) {
    display: none;
}
`

export const NavigationButtonWrapper  = styled.div`
display: flex;
gap: 1em;
align-items: center;

@media (max-width: 768px) {
    display: none;
}`

export const MobileIcon  = styled.div`
display: none;

@media (max-width: 768px) {
    display: block;
}
`

export default NavigationContainer  ;