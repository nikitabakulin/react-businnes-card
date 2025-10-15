import React from 'react';

export const WelcomeBlock = ({ isPortrait }) => {
  return (
    isPortrait ? (
      <div className='welcome-block' style={{ paddingTop: '10vw' }}>
        <div className='first-block'>
          <h1>Программист-разработчик <br /> <span className='title'>nikitabakulin</span></h1>

          <h2 style={{ marginTop: '5%' }}>
            <span style={{ color: '#4824ff' }}>Backend</span> и <span style={{ color: '#4824ff' }}>Full-stack</span> разработка
          </h2>

          <h2>
            Люблю работать с <span style={{ color: '#4824ff' }}>кодом</span> и <span style={{ color: '#4824ff' }}>учиться</span> новому
          </h2>

          <h2>
            Стремлюсь к <span style={{ color: '#4824ff' }}>реальным проектам</span> и <span style={{ color: '#4824ff' }}>росту</span>
          </h2>

          <h3>
            Занимаюсь разработкой <br /> на протяжении <span style={{ color: '#4824ff' }}>1 года</span>
          </h3>
        </div>

        <div className='main-image-block'>
          <img src='./logo512.png' draggable='false' alt='Logo' />
        </div>
      </div>
    ) : (
      <div className='welcome-block-mobile'>
        <div className='main-image-block mobile'>
          <img src='./logo192.png' draggable='false' alt='Logo' />
        </div>

        <div className='first-block mobile'>
          <h1 style={{ fontSize: '10vw' }}>Программист-разработчик <br /> <span className='title'>nikitabakulin</span></h1>

          <h2 style={{ marginTop: '5%', fontSize: '6vw' }}>
            <span style={{ color: '#4824ff' }}>Backend</span> и <span style={{ color: '#4824ff' }}>Full-stack</span> разработка
          </h2>

          <h2 style={{ fontSize: '6vw' }}>
            Люблю работать с <span style={{ color: '#4824ff' }}>кодом</span> и <span style={{ color: '#4824ff' }}>учиться</span> новому
          </h2>

          <h2 style={{ fontSize: '6vw' }}>
            Стремлюсь к <span style={{ color: '#4824ff' }}>реальным проектам</span> и <span style={{ color: '#4824ff' }}>росту</span>
          </h2>

          <h3 style={{ fontSize: '4.5vw' }}>
            Занимаюсь разработкой <br /> на протяжении <span style={{ color: '#4824ff' }}>1 года</span>
          </h3>
        </div>
      </div>
    )
  );
}