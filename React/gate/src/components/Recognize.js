import React, {useState} from 'react';

function Recognize() {
    let [message, setMessage] = useState("FACE ID 인식중입니다...");

    setTimeout(function(){
        setMessage(message = "FACE ID 인식 완료!");
    }, 3000);

    return (
        <div className="recog">
            <span>{message}</span>                  
        </div>
    );
}

export default Recognize;