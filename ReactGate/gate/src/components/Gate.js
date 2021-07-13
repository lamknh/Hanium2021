import React from 'react';
import { Route, Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

import Recognize from './Recognize.js';
import Counter from './Counter.js';
import Id from './Id.js';
import Description from './Description.js';
import Cam from './Cam.js'

const MainBlock = styled.div`
    .contents{
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 90vw;
        height: 90vh;
        background-color: rgb(33, 33, 33);
        display: flex;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
        flex-direction: column;
    }
    .cam{
        margin: 0 auto;
        width: 90vw;
        height: 50vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    }

        
    .display{
        margin: 0 3vw;
    }

    .controller{
        width: 40vw;
        height: 30vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    }

    .controller button{
        margin: 1vh 5vw;
        width: 30vw;
        height: 7vh;
        background-color: rgb(158, 158, 158);
        color: #fff;
        font-size: 1.2rem;
        border-style: none;
        font-weight: bold;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
    }
`;
function Main(){
    return (
        <MainBlock>
            <div id="main">
                <div className="contents">
                    <div className="cam">
                        <Cam />
                        {/* <Recognize /> */}
                        {/* <Counter /> */}
                    </div>
                    <div className="display">
                        <Id />
                        <Description />
                    </div> 
                </div>
            </div>
        </MainBlock>
    )
}

export default Main;