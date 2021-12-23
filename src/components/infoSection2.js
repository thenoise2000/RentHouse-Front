import React from "react";
import styled from "styled-components";
import { Button } from "./Button";


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
`;

const ColumnLeft = styled.div`
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;    

@media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
}

img {
    width: 50%;
    height: 50%;
    position: absolute;
    object-fit: cover;
    border-radius: 5px;
    animated fadeInDown;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
}`;

const ColumnRight = styled.div`
display: flex;
flex-direction: column;
margin-left: 10rem;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};

h1 {
margin-bottom: 2rem;
font-family: "Architects Daughter"; 
font-size: 24px;
color: gray;
}

p {
margin-bottom: 2rem;
font-family: "caveat"; 
font-size: 23px; 
}

.buttons { border-radius: 2px;
margin-top: 6px;

padding: 5px 2px 5px 1px;
border: 1px;
color: black;
font-family: "Architects Daughter";
font-size: 14px;
background-color: blue;
transition: 0.3s ease-out;

&:hover {
 color: #e9e9e9; 
 background-color: red;
}
`;

const InfoSection2 = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <img className="anime" src={image} alt='home'/>                          
                    
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p></ColumnRight>                
            </Container>
        </Section>
    );   
};

export default InfoSection2;