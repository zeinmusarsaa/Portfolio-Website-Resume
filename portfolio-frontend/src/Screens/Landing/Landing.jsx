import React, { useEffect, useState } from "react";
import "../../styles/global.css";
import "./Landing.css";

const Landing = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [dynamicText, setDynamicText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [writtenText, setWrittenText] = useState("");

  const message =
    "\tHello World!\nThank you for visiting my page!\nHere's some info about me:\nMy name is Zein Mosarsaa, I am a Project Manager at BYU OIT and am graduating this April with an Information Systems Degree!";

  const additionalText =
    "I'm passionate about technology and project management. Feel free to connect with me to discuss exciting opportunities or collaborations!";

  const typeMessage = () => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < message.length) {
        setDynamicText((prevText) => prevText + message[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
  };

  useEffect(() => {
    const hasVisitedSession = sessionStorage.getItem("hasVisitedSession");
    const hasVisitedPermanent = localStorage.getItem("hasVisitedPermanent");

    if (!hasVisitedSession) {
      const timeout = setTimeout(() => {
        setPopupVisible(true);
        new Audio("https://www.myinstants.com/media/sounds/erro.mp3").play();
        sessionStorage.setItem("hasVisitedSession", "true");
        localStorage.setItem("hasVisitedPermanent", "true");
      }, 200);
      return () => clearTimeout(timeout);
    } else if (!hasVisitedPermanent) {
      setPopupVisible(true);
      new Audio("https://www.myinstants.com/media/sounds/erro.mp3").play();
      localStorage.setItem("hasVisitedPermanent", "true");
    } else {
      setWrittenText(message);
    }
  }, []);

  useEffect(() => {
    if (isPopupVisible && !isTyping) {
      setIsTyping(true);
      typeMessage();
    }
  }, [isPopupVisible, isTyping]);

  const handleClose = () => {
    setPopupVisible(false);
    setWrittenText(message);
  };

  return (
    <div className="landing-container">
      {/* Left Section */}
      <div className="landing-left">
        <div className="profile-picture">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHwrt0aObto0Q/profile-displayphoto-shrink_400_400/B4DZTXUTcAGkBA-/0/1738779216826?e=2147483647&v=beta&t=IyaLg52hnd6e5Tr7U9juHMWjkkWjpQXt-0QLaSmjU1w"
            alt="Zein Mosarsaa"
            className="profile-img"
          />
        </div>
        <div className="card connect-card">
          <h3>Connect with Me</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/zeinmosarsaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zeinmosarsaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Email</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="landing-right">
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-header">
                <span className="popup-title">Message</span>
                <button onClick={handleClose} className="close-button">
                  X
                </button>
              </div>
              <p className="typing">{dynamicText}</p>
            </div>
          </div>
        )}

        {writtenText && (
          <div className="card message-card">
            <p>{writtenText}</p>
            <p>{additionalText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
