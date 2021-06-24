import React from 'react';
import { Route, Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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

export default Modal;