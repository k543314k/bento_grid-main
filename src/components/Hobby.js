import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hobby.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const navigate = useNavigate();

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
      {/* 點擊時跳轉到首頁的區塊 */}
      <div className="div1" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div className="image-container">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ width: '500px' }}
          />
        </div>
      </div>

      {/* 點擊圖片彈出視窗的區塊 */}
      <div className="div2">
        <h2 className="grid-title">漢堡怎麼做?</h2>
        <div className="image-container">
          <img
            src="/images/1131A_M1361102廖能靖_2.png"
            alt="示例圖片"
            style={{ width: '500px' }}
            onClick={() => openModal('/images/1131A_M1361102廖能靖_2.png')}
          />
        </div>
      </div>

      <div className="div3">
        <h2 className="grid-title">網站怎麼做?</h2>
        <div className="image-container">
          <img
            src="/images/1131A_M1361102廖能靖_1.png"
            alt="示例圖片"
            style={{ width: '500px' }}
            onClick={() => openModal('/images/1131A_M1361102廖能靖_1.png')}
          />
        </div>
      </div>

      <div className="div4">
        <h2 className="grid-title">名片怎麼做?</h2>
        <div className="image-container">
          <img
            src="/images/螢幕擷取畫面 2025-01-06 182911.png"
            alt="示例圖片"
            style={{ width: '820px' }}
            onClick={() => openModal('/images/螢幕擷取畫面 2025-01-06 182911.png')}
          />
        </div>
      </div>

      <div className="div5">
        <div className="image-container">
          <img
            src="/images/113Hb_M1361102_廖能靖_02_0102.png"
            alt="示例圖片"
            style={{ width: '400px' }}
            onClick={() => openModal('/images/113Hb_M1361102_廖能靖_02_0102.png')}
          />
        </div>
      </div>

      <div className="div6">
        <h2 className="grid-title">纏繞怎麼畫?</h2>
        <div className="image-container">
          <img
            src="/images/113B_M1361102_廖能靖.jpg"
            alt="示例圖片"
            style={{ width: '550px' }}
            onClick={() => openModal('/images/113B_M1361102_廖能靖.jpg')}
          />
        </div>
      </div>

      <div className="div7">
        <h2 className="grid-title">文字怎麼排?</h2>
        <div className="image-container">
          <img
            src="/images/113Ha_M1361102_廖能靖_1_0102.png"
            alt="示例圖片"
            style={{ width: '300px' }}
            onClick={() => openModal('/images/113Ha_M1361102_廖能靖_1_0102.png')}
          />
        </div>
      </div>

      {/* 彈出視窗 */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={modalImage}
              alt="大圖示例"
              style={{
               
                maxWidth: 800, // 最大寬度 90%
                maxHeight: 800, // 最大高度 90%
                objectFit: 'contain', // 保持比例，避免變形
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
