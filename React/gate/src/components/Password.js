import React from 'react';
import styled from 'styled-components';

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
`;

const Password = () => {
    return (
        <PasswordBlock>
            <div className="contents">
                
            </div>
        </PasswordBlock>
        
    );
};

export default Password;