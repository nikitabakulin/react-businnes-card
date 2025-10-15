import React, { useEffect, useState } from 'react';
import ModalWindow from './ModalWindow';
import Theme from './Theme';

function Main() {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);


  const { theme, setTheme } = Theme();
  const [ isDarkTheme, setDarkTheme ] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    if (isDarkTheme) {
      lightTheme();
    } else {
      darkTheme();
    }

    setDarkTheme(!isDarkTheme);
  };

  const lightTheme = () => {
    setTheme('light');
  };

  const darkTheme = () => {
    setTheme('dark');
  };

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollUp);
  });
  
  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  }

  return (
    <div>
      <header>
        { isPortrait 
          ? (
            <div className='navigation'>
              <div className="menu">
                <a onClick={ upButton }>Главная</a>
                <a onClick={ (e) => toBlock(e.target.getAttribute('height')) } height="700"> Навыки </a>
                <a onClick={ (e) => toBlock(e.target.getAttribute('height')) } height="1230"> GitHub проекты </a>
                <a onClick={ (e) => toBlock(e.target.getAttribute('height')) } height="1920"> О себе </a>
              </div>
        
              <div className='header-buttons'>
                <button onClick={ handleOpenModal } className="btn">Связаться</button>

                <a href="https://t.me/sid10Juve" target="_blank" className={ theme == 'light' 
                  ? "icon telegram light" 
                  : "icon telegram" }/>
                <a href="https://vk.com/nikita_bakulin" target="_blank" className={ theme == 'light' 
                  ? "icon instagram light" 
                  : "icon instagram" }/>

                <div className="switch" onClick={ toggleTheme }> 
                  <div className={theme === 'light' ? "theme light" : "theme dark"}
                    style={{ transform: isDarkTheme ? 'translateX(38px) rotate(45deg)' : 'translate(0) rotate(45deg)'}}
                  ></div>
                </div>
              </div>
            </div> ) 
          : (
              <div className='navigation'>
                <div className="switch switch-mobile" onClick={ toggleTheme }> 
                    <div className={theme === 'light' ? "theme theme-mobile light" : "theme theme-mobile dark"}
                      style={{ transform: isDarkTheme ? 'translateX(38px) rotate(45deg)' : 'translate(0) rotate(45deg)'}}
                    ></div>
                </div>
                
                <div className='header-buttons-mobile'>
                  <a href="https://t.me/sid10Juve" target="_blank" 
                    className={ theme == 'light' 
                    ? "icon icon-mobile telegram light" 
                    : "icon icon-mobile telegram" }
                  />
                  <a 
                    href="https://vk.com/nikita_bakulin" target="_blank" 
                    className={ theme == 'light' 
                      ? "icon icon-mobile instagram light" 
                      : "icon icon-mobile instagram" }
                  />
                </div>
              </div>
            )}     
      </header>

      <ModalWindow show={ showModal } onClose={ handleCloseModal }>
        <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
        <p style={{ fontSize: "22px" }}>Вы можете связаться со мной в Телеграм <br/> или ВКонтакте</p>
      </ModalWindow>

      {
        isPortrait
        ? (
          <div className='welcome-block' style={{paddingTop: "10vw"}}>
            <div className='first-block'>
              <h1> Программист-разработчик <br/> <span className='title'> nikitabakulin</span> </h1>
                  
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
        )
        : (
          <div className='welcome-block-mobile'>
            <div className='main-image-block mobile'>
              <img src='./logo192.png' draggable="false"/>
            </div>

            <div className='first-block mobile'>
              <h1 style={{fontSize: "10vw"}}> Программист-разработчик <br/> <span className='title'> nikitabakulin</span> </h1>
                  
              <h2 style={{ marginTop: "5%" , fontSize: "6vw"}}>  
                <span style={{ color: "#4824ff" }}> Backend </span>
                  и 
                <span style={{ color: "#4824ff" }}> Full-stack </span>
                  разработка
              </h2>

              <h2 style={{fontSize: "6vw"}}> 
                Люблю работать с
                <span style={{ color: "#4824ff" }}> кодом </span>
                    и
                <span style={{ color: "#4824ff" }}> учиться </span> новому
              </h2>

              <h2 style={{fontSize: "6vw"}}> 
                Стремлюсь к 
                <span style={{ color: "#4824ff" }}> реальным проектам </span>
                и 
                <span style={{ color: "#4824ff" }}> росту </span>
              </h2>
                  
              <h3 style={{fontSize: "4.5vw"}}> Занимаюсь разработкой <br/> на протяжении
                <span style={{ color:"#4824ff" }}> 1 года </span>
              </h3>
            </div>
          </div>
        )
      }
      

      <div className={'skills-block'} draggable="false">
        <h1 style={{ fontSize: isPortrait ? "52px" : "10vw"}}>Навыки</h1>
        <p style={{ fontSize: isPortrait ? "27px" : "6vw"}}> Пишу  
          <span style={{ color:"#4824ff" }}> чистый </span>
          и
          <span style={{ color:"#4824ff" }}> читаемый </span>
          код с применением технологий
        </p>
        <div style={{display: isPortrait ? "flex" : '', marginTop: "16px"}}> 
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> NEXT.Js </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> React </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> TypeScript, JavaScript </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> PostgreSQL, Prisma </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> Andoid (Java, Kotlin) </p> <br/>  
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> Git </p> <br/>
        </div>
        <div style={{display: isPortrait ? "flex" : ''}}> 
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> WPF, ASP.Net, C# </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> EntityFramework </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> MS SQL Server </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> HTML, CSS </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> Паттерны MVC, MVVM </p> <br/>
        </div>
        <p style={{fontSize: isPortrait ? "27px" : "6vw"}}> Готов работать в команде, быстро адапируюсь к процессам и куммуникации. <br/>
          Детальную информацию готов обсудить при
          <span style={{ color:"#4824ff", cursor: "pointer" }} onClick={isPortrait ? handleOpenModal : ()=>{}}> личной переписке</span>.        
        </p>
      </div>

      <div className={'github-block'}>
        <h1 style={{ fontSize: isPortrait ? "52px" : "10vw"}}>GitHub проекты</h1>
        <p style={{ fontSize: isPortrait ? "27px" : "6vw"}}> Ознакомтесь с моими репозиториями на   
          <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> GitHub </a>. <br/>
          <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> Здесь </a>
          можно увидеть примеры API, веб-приложений, над которыми я работал.
        </p>
        <p style={{ fontSize: isPortrait ? "27px" : "6vw" }}> Активно развиваюсь как разработчик, и все свежие наработки, эксперементальные и pet-проекты, <br/>
          а также улучшения к существующим репозиториям будут регулярно появляться в моём  
          <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> GitHub-профиле</a>.
        </p>
      </div>

      <div className={"about-myself-block"}>
        <h1 style={{ fontSize: isPortrait ? "52px" : "10vw" }}>О себе</h1>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'} style={{ marginTop: isPortrait ? "-1.5vw" : "-6vw" }}>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Никита Бакулин - Backend и Full-Stack разработчик из города Кирова </p>
        </div>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
          <p className={ isPortrait ? "" : ""} style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Образование: Колледж, Информационные системы и программирование, специалист </p>
        </div>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Коммуникабельный, ответственный, умею работать в команде </p>
        </div>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Быстро осваиваю новые технологии и стеки </p>
        </div>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Изучаю английский для профессионального роста и работы с международной документацией </p>
        </div>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Есть водительское удостоверение и автомобиль </p>
        </div>
        <div className={ isPortrait ? 'text-container' : 'text-container mobile'} >
          <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
          <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Не  пью, не курю </p>
        </div>
      </div>

      <div className='footer'>@nikitabakulin</div>

      <button 
        className={ scroll < 720 ? "" : "btn-up" }
        onClick={ upButton }
      ></button>
    </div>
  );
} 

export default Main;
