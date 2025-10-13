import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

function Main() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header>
        <div className="menu">
          <a>Обо мне</a>
          <a>Услуги</a>
          <a>Портфолио</a>
          <a>Отзывы</a>
          <a>Гарантии</a>
        </div>

        <button onClick={handleOpenModal} className="btn">Связаться</button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{color: "#4824ff", fontSize: "40px"}}>Контакты</h2>
          <p style={{fontSize: "22px"}}>Вы можете связаться со мной в Телеграм <br/> или ВКонтакте</p>
        </ModalWindow>

        <a href="https://t.me/sid10Juve" target="_blank" className="icon telegram"/>
        <a href="https://t.me/sid10Juve" target="_blank" className="icon instagram"/>

        <div className="switch"> 
          <div className="theme light"></div>
        </div>

      </header>

    </div>
  );
} 

export default Main;
