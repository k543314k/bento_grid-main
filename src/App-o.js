import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Novel from './components/Novel';
import Hobby from './components/Hobby';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </Router>
  );
};

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="parent">
      <div className="div18">
        <h2 className="grid-title">關於我</h2>
        <div className="image-container">
          <img
            src="/images/Card.png"
            alt="示例圖片"
            style={{ width: "900px" }}
            onClick={() => openModal('/images/Card.png')}
          />
        </div>
      </div>
      <div className="div20">
        <h2 className="grid-title">旅遊</h2>
        <div className="image-container">
          <img
            src="/images/Card-1.png"
            alt="示例圖片"
            style={{ width: "1200px" }}
            onClick={() => openModal('/images/Card-1.png')}
          />
        </div>
      </div>
      <div className="div21">
        <h2 className="grid-title">遊戲</h2>
        <div className="image-container">
          <img
            src="/images/4c2f1a7677f332b2f4859d1cb31govx5.jpg"
            alt="示例圖片"
            style={{ width: "820px" }}
            onClick={() => openModal('/images/4c2f1a7677f332b2f4859d1cb31govx5.jpg')}
          />
        </div>
      </div>
      <div className="div22" onClick={() => (window.location.href = '/novel')} style={{ cursor: 'pointer' }}>
        <h2 className="grid-title">小說</h2>
        <div className="image-container">
          <img src="/images/20241118_212430.jpg" alt="示例圖片" style={{ width: "400px" }} />
        </div>
      </div>
      <div className="div23">
        <h2 className="grid-title">聯絡我</h2>
        <div className="image-container">
          <img
            src="/images/Card-4.png"
            alt="示例圖片"
            style={{ width: "700px" }}
            onClick={() => openModal('/images/Card-4.png')}
          />
        </div>
      </div>
      <div className="div24" onClick={() => (window.location.href = '/hobby')} style={{ cursor: 'pointer' }}>
        <h2 className="grid-title">我的作品</h2>
        <div className="image-container">
          <img src="/images/螢幕擷取畫面 2025-01-02 141720.png" alt="示例圖片" style={{ width: "400px" }} />
        </div>
      </div>
      <div className="div25">
        <h2 className="grid-title">建模</h2>
        <div className="image-container">
          <img
            src="/images/螢幕擷取畫面 2025-01-02 142246.png"
            alt="示例圖片"
            style={{ width: "500px" }}
            onClick={() => openModal('/images/螢幕擷取畫面 2025-01-02 142246.png')}
          />
        </div>
      </div>
      <div className="div26">
        <h2 className="grid-title">2D遊戲</h2>
        <div className="image-container">
          <img
            src="/images/螢幕擷取畫面 2025-01-02 141901.png"
            alt="示例圖片"
            style={{ width: "400px" }}
            onClick={() => openModal('/images/螢幕擷取畫面 2025-01-02 141901.png')}
          />
        </div>
      </div>
      <div className="div27">
        <h2 className="grid-title">3D遊戲</h2>
        <div className="image-container">
          <img
            src="/images/螢幕擷取畫面 2025-01-02 141951.png"
            alt="示例圖片"
            style={{ width: "500px" }}
            onClick={() => openModal('/images/螢幕擷取畫面 2025-01-02 141951.png')}
          />
        </div>
      </div>

      {/* Modal 彈窗 */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="大圖示例" style={{
              // 最小高度
                maxWidth: 800, // 最大寬度 90%
                maxHeight: 800, // 最大高度 90%
                objectFit: 'contain', // 保持比例，避免變形
              }}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
