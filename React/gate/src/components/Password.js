import React from 'react';
import styled from 'styled-components';
import NumberPad from './NumberPad';

const PasswordBlock = styled.div`
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

    .title{
        color: rgb(224, 224, 224);
        width: 45vw;
        margin: 10vw 0;
        font-size : 1.2rem;
    }
`;

const Password = () => {
    return (
        <PasswordBlock>
            <div className="contents">
                <div className="title">
                    <h2>관리자 비밀번호 입력</h2>
                </div>
                <NumberPad />
            </div>
        </PasswordBlock>
    );
};

export default Password;