import React, {useState} from 'react';
import styled from 'styled-components';

const IdBlock = styled.div`
    .id{
        margin: 2vh 5vw;
        width: 30vw;
        height: 7vh;
        background-color: rgb(243, 156, 18);
        font-weight: bold;
        font-size: 1.2rem;
        color : #fff;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
    }
    .id h3{
        margin: 2vh;
        padding: 1vh;
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
                <h3>{id}</h3>
            </div>
        </IdBlock>
    );
}

export default Id;