import React, {useState} from 'react';
import styled from 'styled-components';

const DescriptionBlock = styled.div`
    .description{
        margin: 0 5vw;
    }
    .description h2, p{
        margin: 0;
    }
`;

function Description() {
    let [temperature, setTemperature] = useState("");
    var [time, setTime] = useState("");

    let tem = setTimeout(function(){
        setTemperature(36.6);
        setTime("2021-05-13 오전 10:46");
    }, 3000);

    if(temperature){
        clearTimeout(tem);
    }

    return (
        <DescriptionBlock>
            <div className="description">
                <h2>체온 : {temperature}</h2>
                <p>출입시간 : {time}</p>
            </div>
        </DescriptionBlock>
    );
}

export default Description;