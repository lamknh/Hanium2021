import React, {useState} from 'react';
import styled from 'styled-components';

const IdBlock = styled.div`
    .id{
        margin: 0 auto;
        width: 60vw;
        font-size: 1.2rem;
        //background-color: rgb(243, 156, 18);
        font-weight: bold;
        color : #fff;
        color: yellow;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
    }
    .id h2{
        margin: 2.3vh;
    }
`;

function Id() {
    let [id, setId] = useState("");

    setTimeout(function(){
        setId("201911560 윤지민");
    }, 3000);

    return (
        <IdBlock>
            <div className="id">
                <h2>{id}</h2>
            </div>
        </IdBlock>
    );
}

export default Id;