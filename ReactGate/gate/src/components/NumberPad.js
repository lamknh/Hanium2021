import React, { useState } from "react";
import styled from 'styled-components';

import RecogModal from './RecogModal';

const NumPadBlock = styled.div`
    .numpad{
        overflow: visible;
    }
    .pin{
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        float : left;
        position: relative;
        top: 37vh;
        left: -27vw;
    }
    .buttons{
        width: 45vw;
        margin: 14vh 0;
        position : absolute;
    }
    .buttons button{
        width: 10vw;
        height: 15vh;
        background-color: #fff;
        border-style : none;
        margin: 1vh;
        font-size : 1.2rem;
        font-weight: bold;
        border-radius: 10px;
    }
    .buttons button:hover{
        cursor:pointer;
    }
    
    #enter{
        width: 21vw;
        height: 15vh;
        background-color: rgb(243, 156, 18);
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
    }
`;

const NumberPad = () => {
    const [pin, setPin] = useState("");
  
    return (
        <NumPadBlock>
            <div className="numpad">
                <div className="pin">{pin}</div>
                <div className="buttons">
                <div>
                    <button onClick={() => setPin((pin) => `${pin}1`)}>1</button>
                    <button onClick={() => setPin((pin) => `${pin}2`)}>2</button>
                    <button onClick={() => setPin((pin) => `${pin}3`)}>3</button>
                </div>
                <div>
                    <button onClick={() => setPin((pin) => `${pin}4`)}>4</button>
                    <button onClick={() => setPin((pin) => `${pin}5`)}>5</button>
                    <button onClick={() => setPin((pin) => `${pin}6`)}>6</button>
                </div>
                <div>
                    <button onClick={() => setPin((pin) => `${pin}7`)}>7</button>
                    <button onClick={() => setPin((pin) => `${pin}8`)}>8</button>
                    <button onClick={() => setPin((pin) => `${pin}9`)}>9</button>
                </div>
                <div>
                    {/* <button onClick={() => setPin((pin) => pin.slice(0, pin.length - 1))}>
                    &lt;
                    </button> */}
                    <button onClick={() => setPin((pin) => `${pin}0`)}>0</button>
                    {/* <button onClick={() => setPin("")} id="enter"> Enter </button> */}
                    <RecogModal />
                </div>
                </div>
            </div>
        </NumPadBlock>
    );
}

export default NumberPad;
