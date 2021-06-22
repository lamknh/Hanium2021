import React from 'react';
import './mainStyle.css';
import Recognize from './Recognize.js'
import Counter from './Counter.js';

function Main(){
    return (
        <div id="main">
        <div className="contents">
            <div className="cam">
                <Recognize />
                <div className="camera"></div>
                <Counter />
            </div>
            <div className="display">
                <div className="temperature">
                    <div className="temcam"></div>
                    <div className="temchart"></div>
                </div>
                <div className="controller">
                    <div className="id">

                    </div>
                    <div className="description">
                        설명
                    </div>
                    <button>관리자 호출</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main;