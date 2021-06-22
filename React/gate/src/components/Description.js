import React, {useState} from 'react';

function Description() {
    let [temperature, setTemperature] = useState("");
    var [time, setTime] = useState("");

    let tem = setTimeout(function(){
        setTemperature(temperature = 36.6);
        setTime(time = "2021-05-13 오전 10:46");
    }, 3000);

    if(temperature){
        clearTimeout(tem);
    }

    return (
        <div className="description">
            <h2>체온 : {temperature}</h2>
            <p>출입시간 : {time}</p>
        </div>
    );
}

export default Description;