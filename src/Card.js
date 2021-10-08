import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    background-color: #998FC7;
    opacity: 25;
    width: 90%;
    padding: 5px;
    margin: 0 auto;
`;

const ImageConfig = styled.img`
    max-width: 90%;
    border-radius: 3rem;
`

const ParagraphDiv = styled.div `
    font-family: Arial, Helvetica, sans-serif;
    color: #364958;
    background-color: #998FC7;
    width: 80%;
    margin: 0 auto;
    opacity: 1.5;
`

function Card(props) {
    console.log(props);
    if(!props.image) return <h3>Loading...</h3>;

    return (
        <Image>
            <ImageConfig
                src = {props.image}
                alt = "NASA's Photo of the Day"
            />

            <ParagraphDiv>
                <p>{props.date}</p>
                <p>{props.explanation}</p>
            </ParagraphDiv>
        </Image>
    )
}

export default Card;