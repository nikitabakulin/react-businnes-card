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
          <a>О себе</a>
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
        <a href="https://vk.com/nikita_bakulin" target="_blank" className="icon instagram"/>

        <div className="switch"> 
          <div className="theme light"></div>
        </div>

      </header>

      <div className='welcome-block'>
        <div className='first-block'>
          <h1> Программист-разработчик <span className='title'> nikita_bakulin</span> </h1>
          
          <h2 style={{ marginTop: "5%" }}>  
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

          <h2> 
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

      <div className='skills-block' draggable="false">
        <h1 style={{ fontSize: "52px" }}>Навыки</h1>
        <p style={{ fontSize: "27px" }}> Пишу  
          <span style={{ color:"#4824ff" }}> чистый </span>
          и
          <span style={{ color:"#4824ff" }}> читаемый </span>
          код с применением технологий
        </p>
        <div style={{display: "flex", marginTop: "16px"}}> 
          <p className='tag'> <p className='tag-icon'/> NEXT.Js </p>
          <p className='tag'> <p className='tag-icon'/> React </p>
          <p className='tag'> <p className='tag-icon'/> TypeScript, JavaScript </p>
          <p className='tag'> <p className='tag-icon'/> PostgreSQL, Prisma </p>
          <p className='tag'> <p className='tag-icon'/> Andoid (Java, Kotlin) </p>  
          <p className='tag'> <p className='tag-icon'/> Git </p>  
        </div>
        <div style={{display: "flex", marginTop: "16px"}}> 
          <p className='tag'> <p className='tag-icon'/> WPF, ASP.Net, C# </p>
          <p className='tag'> <p className='tag-icon'/> EntityFramework, MS SQL Server </p>
          <p className='tag'> <p className='tag-icon'/> HTML, CSS </p>
          <p className='tag'> <p className='tag-icon'/> Паттерны MVC, MVVM </p>
        </div>
        <p style={{fontSize: "27px"}}> Готов работать в команде, быстро адапируюсь к процессам и куммуникации. <br/>
          Детальную информацию готов обсудить при
          <span style={{ color:"#4824ff", cursor: "pointer" }} onClick={handleOpenModal}> личной переписке</span>.        
        </p>
      </div>

      <div className='github-block'>
        <h1 style={{ fontSize: "52px" }}>GitHub проекты</h1>
        <p style={{ fontSize: "27px" }}> Ознакомтесь с моими репозиториями на   
          <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> GitHub </a>. <br/>
          <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> Здесь </a>
          можно увидеть примеры API, веб-приложений, над которыми я работал.
        </p>
        <p style={{ fontSize: "27px" }}> Активно развиваюсь как разработчик, и все свежие наработки, эксперементальные и pet-проекты, <br/>
          а также улучшения к существующим репозиториям будут регулярно появляться в моём  
          <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> GitHub-профиле</a>.
        </p>
      </div>

      <div className='about-myself-block'>
        <h1 style={{ fontSize: "52px" }}>О себе</h1>
        <p style={{ fontSize: "27px" }} className='tag'> <p className='tag-icon'/> Никита Бакулин - Backend и Full-Stack разработчик из города Кирова </p>
        <p style={{ fontSize: "27px" }} className='tag'> <p className='tag-icon'/> Образование: Колледж, Информационные системы и программирование, специалист </p>
        <p style={{ fontSize: "27px" }} className='tag'> <p className='tag-icon'/> Коммуникабельный, ответственный, умею работать в команде </p>
        <p style={{ fontSize: "27px" }} className='tag'> <p className='tag-icon'/> Изучаю английский для профессионального роста и работы с международной документацией </p>
        <p style={{ fontSize: "27px" }} className='tag'> <p className='tag-icon'/> Быстро осваиваю новые технологии и стеки </p>
        <p style={{ fontSize: "27px" }} className='tag'> <p className='tag-icon'/> Есть водительское удостоверение и автомобиль </p>
      </div>
    </div>
  );
} 

export default Main;
