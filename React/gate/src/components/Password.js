import React from 'react';
import styled from 'styled-components';

const PasswordBlock = styled.div`
    .body{
        background-color: black;
    }
`;

const Password = () => {
    return (
        <PasswordBlock>
            <div>
                <h1>소개</h1>
                <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            </div>
        </PasswordBlock>
        
    );
};

export default Password;