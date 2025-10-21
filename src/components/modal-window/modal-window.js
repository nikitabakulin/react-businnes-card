
import './modal-window.css';
import { useModalVisibility } from "../../hooks";

const ModalWindow = ({ show, onClose, children }) => {
    const isVisible = useModalVisibility(show, onClose);

    if (!isVisible) {
        return null;
    }

    return (
        <div 
            className={`modal-backdrop ${show ? 'show' : ''}`}
            style={{ display: isVisible }}
            onClick={onClose}
            >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose} className="modal-close-button" aria-label="Close Modal"></button>
                    {children}
                    <div style={{ display: "flex" }}>
                        <a href="https://t.me/nikitabakulin43" target="_blank" className="social-button">
                        <a className="social telegram"/> Телеграм </a>
                        <a href="https://vk.com/nikitabakulin" target="_blank" className="social-button">
                        <a className="social vk"/> ВКонтакте </a>
                    </div>
                </div>
        </div>
    )
};

export default ModalWindow;