import styled from "styled-components"

export const Constraints  = styled.div`
width: 100%;
max-width: ${({Max}) => Max ? Max : "90%"};
margin: 0 auto;
`

export const HeadingOne  = styled.h1`
font-size: 2.5rem;
color: ${({Text}) => Text ? Text : "#412272"};
`

export const Paragraph = styled.p`
font-size: 1.2rem;
opacity: 0.6;
line-height: 25px;
color: ${({Text}) => Text ? Text : "black"};
`

export const Button1  = styled.button`
   background-color:  ${({Bg}) => Bg ? Bg : "white"};
    color: ${({Text}) => Text ? Text : "#412272"};
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

      @media (max-width: 768px){
        width: 100%;
      }
`

export const Section  = styled.div`
width: 100%;
padding: 1em 0;
`

export const SectionInner = styled.div`
width: 100%;
display: grid;
gap: 2em;
grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
align-items: center;
justify-content: space-between;

@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
 grid-template-rows: repeat(1, 1fr);
}
`

export const Divider  = styled.div`
width: 100%;
`

export default Constraints;
