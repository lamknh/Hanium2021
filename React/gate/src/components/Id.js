import React, {useState} from 'react';

function Id() {
    let [id, setId] = useState("");

    setTimeout(function(){
        setId(id = "201911560 윤지민");
    }, 3000);

    return (
        <div className="id">
            <h3>{id}</h3>
        </div>
    );
}

export default Id;