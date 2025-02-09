import { useState } from 'react';
import './ValentineSurprise.css';

const ValentineSurprise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [mainMessage, setMainMessage] = useState('Will you be my Valentine?');

  const handleOpenCard = () => {
    setIsOpen(true);
    addHearts();
  };

  const addHearts = () => {
    const newHearts = Array(10).fill().map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 2
    }));
    setHearts(newHearts);
  };

  const handleYesClick = () => {
    setMainMessage('YAY! You make my heart flutter! 💖');
    addHearts();
  };

  const handleNoHover = () => {
    const button = document.querySelector('.no-button');
    const rect = button.getBoundingClientRect();
    button.style.position = 'absolute';
    button.style.left = `${Math.random() * (window.innerWidth - rect.width)}px`;
    button.style.top = `${Math.random() * (window.innerHeight - rect.height)}px`;
  };

  return (
    <div className={`valentine-container ${isOpen ? 'open' : ''}`}>
      {!isOpen ? (
        <button className="open-button" onClick={handleOpenCard}>
          💌 Open Your Valentine's Surprise!
        </button>
      ) : (
        <div className="card">
          <div className="card-content">
            <h1 className="main-message">{mainMessage}</h1>
            
            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>
                YES! 💖
              </button>
              <button 
                className="no-button"
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
              >
                Maybe...? 😅
              </button>
            </div>

            <div className="decorations">
              {hearts.map(heart => (
                <div 
                  key={heart.id}
                  className="heart"
                  style={{
                    left: `${heart.left}%`,
                    animationDelay: `${heart.animationDelay}s`
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentineSurprise;