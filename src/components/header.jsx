export const Header = ({
     isPortrait, 
     theme, 
     toggleTheme, 
     handleOpenModal, 
     toBlock, 
     upButton 
}) => { 
  return (
    <header>
      { isPortrait ? (
        <div className='navigation'>
          <div className="menu">
            <a onClick={upButton}>Г лавная</a>
            <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Навыки</a>
            <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1230">GitHub проекты</a>
            <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1920">О себе</a>
          </div>

          <div className='header-buttons'>
            <button onClick={handleOpenModal} className="btn">Связаться</button>

            <a href="https://t.me/nikitabakulin7" target="_blank" rel="noopener noreferrer" className={theme === 'light' ? "icon telegram light" : "icon telegram"} />
            <a href="https://vk.com/nikitabakulin" target="_blank" rel="noopener noreferrer" className={theme === 'light' ? "icon instagram light" : "icon instagram"} />

            <div className="switch" onClick={toggleTheme}>
              <div className={theme === 'light' ? "theme light" : "theme dark"}
                style={{ transform: theme === 'dark' ? 'translateX(40px) rotate(45deg)' : 'translate(0) rotate(45deg)' }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className='navigation'>
          <div className="switch switch-mobile" onClick={toggleTheme}>
            <div className={theme === 'light' ? "theme theme-mobile light" : "theme theme-mobile dark"}
              style={{ transform: theme === 'dark' ? 'translateX(8.5vw) rotate(45deg)' : 'translate(0) rotate(45deg)' }}
            ></div>
          </div>

          <div className='header-buttons-mobile'>
            <a href="https://t.me/nikitabakulin7" target="_blank" rel="noopener noreferrer"
              className={theme === 'light' ? "icon icon-mobile telegram light" : "icon icon-mobile telegram"}
            />
            <a href="https://vk.com/nikitabakulin" target="_blank" rel="noopener noreferrer"
              className={theme === 'light' ? "icon icon-mobile instagram light" : "icon icon-mobile instagram"}
            />
          </div>
        </div>
      )}
    </header>
    
  );
}