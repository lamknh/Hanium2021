import React from 'react';
import { Route, Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Modal = () => (
    <Popup
        trigger={<button className="button" id ="enter"> Enter </button>}
        modal
        nested
    >
    {close => (
        <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> 신원 확인 </div>
            <div className="content">
            {' '}
            ID 카드를 확인해주세요
            </div>
            <div className="actions">
            <Link to='/'>
            <button
                className="button"
                onClick={() => {
                console.log('modal closed ');
                close();
                }}
            >
                신원 확인 완료
            </button>
            </Link>
            <Link to='/'>
            <button
                className="button"
                id="fail"
                onClick={() => {
                console.log('modal closed ');
                close();
                }}
            >
                신원 확인 실패
            </button>
            </Link>
            </div>
        </div>
        )}
    </Popup>
  );

export default Modal;