import ModalWindow from './ModalWindow';
import { useIsPortrait, useModal, useThemeToggle, useScroll } from './hooks';
import { AboutMySelfBlock, Footer, GitHubBlock, Header, SkillsBlock, WelcomeBlock } from './components';
import { useCallback } from 'react';

function Main() {
  const isPortrait = useIsPortrait();
  const { theme, toggleTheme } = useThemeToggle();
  const { showModal, handleOpenModal, handleCloseModal } = useModal();
  const { scroll, upButton } = useScroll();

  const toBlock = useCallback((height) => {
    const top = Number(height);
    if (!isNaN(top)) {
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    }
  }, []);
  
  return (
    <div>
      <Header 
        isPortrait={isPortrait}
        theme={theme}
        toggleTheme={toggleTheme}
        handleOpenModal={handleOpenModal}
        toBlock={toBlock}
        upButton={upButton}
      />

      <ModalWindow show={ showModal } onClose={ handleCloseModal }>
        <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
        <p style={{ fontSize: "22px" }}>Вы можете связаться со мной в Телеграм <br/> или ВКонтакте</p>
      </ModalWindow>

      <WelcomeBlock isPortrait={isPortrait} />
      <SkillsBlock isPortrait={isPortrait} handleOpenModal={handleOpenModal} />    
      <GitHubBlock isPortrait={isPortrait} />
      <AboutMySelfBlock isPortrait={isPortrait} />
      
      <Footer/>
      
      <button className={ scroll < 720 ? "" : "btn-up" } onClick={ upButton }></button>
    </div>
  );
} 

export default Main;
