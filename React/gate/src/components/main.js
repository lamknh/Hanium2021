import React from 'react';
import { Route, Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

import Recognize from './Recognize.js';
import Counter from './Counter.js';
import Id from './Id.js';
import Description from './Description.js';
import Password from './Password.js';

import './Modal.css'

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
    }
    .cam{
        display: flex;
        margin: auto 0 auto auto;
        width: 41vw;
        height: 80vh;
        background-color: #fff;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    }
    .camera{
        margin: 0 auto;
        width: 400px;
        height: 400px;
        background-color: #000;
    }

        
    .display{
        margin: 0 3vw;
    }

    .temperature{
        display: flex;
        margin: 5vh auto;
        width: 40vw;
        height: 45vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    }
    .temcam{
        margin: auto 2vh auto auto;
        width: 300px;
        height: 300px;
        background-color: #000;
    }
    .temchart{
        margin: auto;
        width: 50px;
        height: 300px;
        background-color: #000;
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
        margin: 2vh 5vw;
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
    .controller button:hover{
        cursor: pointer;
    }
`;
function Main(){
    const Modal = () => (
        <Popup
            trigger={<button className="button"> 관리자 호출 </button>}
            modal
            nested
        >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header"> 관리자 호출 </div>
                <div className="content">
                {' '}
                관리자를 호출하였습니다.
                </div>
                <div className="actions">
                <Link to='/pwd'>
                <button
                    className="button"
                    onClick={() => {
                    console.log('modal closed ');
                    close();
                    }}
                >
                    잠시만 기다려주세요
                </button>
                </Link>
                </div>
            </div>
            )}
        </Popup>
      );

    return (
        <MainBlock>
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
                            <Id />
                            <Description />
                            <Modal/>
                        </div>
                    </div>
                </div>
                <Route path="/pwd" component={Password} />
            </div>
        </MainBlock>
    )
}

export default Main;