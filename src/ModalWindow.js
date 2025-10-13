
import React, { useState, useCallback, useEffect} from "react";
import './ModalWindow.css';

const ModalWindow = ({ show, onClose, children }) => {
    const [isVisible, setVisible] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setVisible(true);
            document.addEventListener('keydown', handleKeyDown)
        } else {
            const timer = setTimeout(() => setVisible(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

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
                        <a href="https://t.me/sid10Juve" target="_blank" className="social-button">
                        <a className="social telegram"/> Telegram </a>
                        <a href="https://t.me/sid10Juve" target="_blank" className="social-button">
                        <a className="social instagram"/> Instagram </a>
                    </div>
                </div>
        </div>
    )
};

export default ModalWindow;