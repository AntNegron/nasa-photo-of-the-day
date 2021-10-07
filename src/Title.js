import React from "react";
import styled from 'style-components';

const TitleStyle = styled.div`
    font-family: 'sans-serif';
    color: #000000;
    background-color: #A1D2CE;
    margin: 0 auto;
`;

function Title(props) {
    console.log('title', props);

    if(!props.title)
    return <h4>Loading, please wait</h4>;

    return (
        <TitleStyle>
            <h1>Nasa's Photo of the Day</h1>
            <h3>{props.Title}</h3>
            <p><span>copyright</span>{props.copyright}</p>
        </TitleStyle>
    )
}

export default Title;