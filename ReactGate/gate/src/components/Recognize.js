import React, {useState} from 'react';
import styled from 'styled-components';

const RecogBlock = styled.div`  
    .recog{
        margin: 4vh 0;
        font-size: 26px;
        font-weight: bold;
    }
`;

function Recognize() {
    let [message, setMessage] = useState("FACE ID 인식중입니다...");

    setTimeout(function(){
        setMessage("FACE ID 인식 완료!");
    }, 3000);

    return (
        <RecogBlock>
            <div className="recog">
                <span>{message}</span>                  
            </div>
        </RecogBlock>
    );
}

export default Recognize;