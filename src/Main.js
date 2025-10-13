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

      <div className='welcome-block'>
        <div className='first-block'>
          <h1> Программист-разработчик <span className='title'> nikita_bakulin</span> </h1>
          
          <h2 style={{ marginTop: "7%" }}>  
            <span style={{ color: "#4824ff" }}> Backend </span>
            и 
            <span style={{ color: "#4824ff" }}> Full-stack </span>
            разработка
          </h2>

          <h2> 
            Люблю работать с
            <span style={{ color: "#4824ff" }}> кодом </span>
            и
            <span style={{ color: "#4824ff" }}> учиться </span> новому
          </h2>

          <h2 style={{ marginBottom: "7%"}}> 
            Стремлюсь к 
            <span style={{ color: "#4824ff" }}> реальным проектам </span>
            и 
            <span style={{ color: "#4824ff" }}> росту </span>
          </h2>
          
          <h3> Занимаюсь разработкой <br/> на протяжении
            <span style={{ color:"#4824ff" }}> 1 года </span>
          </h3>
        </div>

        <div className='main-image-block'>
          <img src='./logo512.png' draggable="false"/>
        </div>
      </div>
    </div>
  );
} 

export default Main;
