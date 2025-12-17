import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Novel.css';

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
      {/* 跳轉首頁的區塊 */}
      <div className="div9" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div className="image-container">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ width: '500px' }}
          />
        </div>
      </div>

      {/* 點擊圖片彈出視窗的區塊 */}
      <div className="div10">
        <div className="image-container">
          <img
            src="/images/20241118_213746.jpg"
            alt="示例圖片"
            style={{ width: '300px' }}
            onClick={() => openModal('/images/20241118_213746.jpg')}
          />
        </div>
      </div>

      <div className="div11">
        <div className="image-container">
          <img
            src="/images/20241118_220854.jpg"
            alt="示例圖片"
            style={{ width: '500px' }}
            onClick={() => openModal('/images/20241118_220854.jpg')}
          />
        </div>
      </div>

      <div className="div12">
        <div className="image-container">
          <img
            src="/images/20241119_192706.jpg"
            alt="示例圖片"
            style={{ width: '600px' }}
            onClick={() => openModal('/images/20241119_192706.jpg')}
          />
        </div>
      </div>

      <div className="div13">
        <div className="image-container">
          <img
            src="/images/20241118_220903.jpg"
            alt="示例圖片"
            style={{ width: '400px' }}
            onClick={() => openModal('/images/20241118_220903.jpg')}
          />
        </div>
      </div>

      <div className="div14">
        <div className="image-container">
          <img
            src="/images/20241118_212430.jpg"
            alt="示例圖片"
            style={{ width: '550px' }}
            onClick={() => openModal('/images/20241118_212430.jpg')}
          />
        </div>
      </div>

      <div className="div15">
        <div className="image-container">
          <img
            src="/images/20241118_222228.jpg"
            alt="示例圖片"
            style={{ width: '450px' }}
            onClick={() => openModal('/images/20241118_222228.jpg')}
          />
        </div>
      </div>

      <div className="div16">
        <div className="image-container">
          <img
            src="/images/20241119_185134.jpg"
            alt="示例圖片"
            style={{ width: '450px' }}
            onClick={() => openModal('/images/20241119_185134.jpg')}
          />
        </div>
      </div>

      <div className="div17" style={{ backgroundColor: 'darkblue' }}>
        一、故事內容<br />
        輕小說中有著各式各樣有趣的故事。<br />
        二、紙本書籍<br />
        比起電子書籍，紙本書籍較有溫度，並且較不傷眼。<br />
        三、插畫<br />
        小說的插畫也是輕小說的魅力的一部分，好看封面能夠吸引讀者拿起來閱讀，書中的插畫能讓故事更加生動具體的浮現在讀者的腦海中。
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
