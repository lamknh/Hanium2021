import React from 'react';
import './mainStyle.css'

const Main = () => (
    <div id="main">
        <div class="contents">
            <div class="cam">
                <div class="recog">
                    Face ID 인식중입니다...                    
                </div>
                <div class="camera"></div>
                <div class="countdown">
                    3
                </div>
            </div>
            <div class="display">
                <div class="temperature">
                    <div class="temcam"></div>
                    <div class="temchart"></div>
                </div>
                <div class="controller">
                    <div class="id">

                    </div>
                    <div class="description">
                        설명
                    </div>
                    <button>관리자 호출</button>
                </div>
            </div>
        </div>
    </div>
)

export default Main;