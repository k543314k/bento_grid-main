import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Tilt from 'react-parallax-tilt'; 
import { motion, AnimatePresence } from "framer-motion";

// === Vanta 特效 (請確認 npm install three vanta) ===
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

// === 新增：引入品牌 Logo ===
import { FaPython, FaReact, FaUnity, FaIndustry } from 'react-icons/fa'; 
import { SiAutocad, SiAutodeskrevit, SiTableau } from 'react-icons/si';

// === 圖片引入 (請自行打開並確認路徑正確) ===
// import profileImg from './images/profile.jpg';
// ...

function App() {
  const [viewMode, setViewMode] = useState('home'); // 'home' | 'art-gallery'
  const [selectedId, setSelectedId] = useState(null);
  const vantaRef = useRef(null);

  // === Vanta 背景特效 (修復版) ===
  useEffect(() => {
    let vantaEffect = null;

    // 只有在 Home 模式且 DOM 存在時才啟動
    if (viewMode === 'home' && vantaRef.current) {
      try {
        vantaEffect = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true, touchControls: true, gyroControls: false,
          minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00,
          color: 0x3b82f6,       // 藍色線條
          backgroundColor: 0x0f0f11, // 深色背景
          pointsColor: 0xffffff,
          maxDistance: 23.00, spacing: 18.00
        });
      } catch (error) {
        console.error("Vanta init failed", error);
      }
    }

    // 清除函數：切換頁面時銷毀特效
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [viewMode]); // 只要 viewMode 改變，就會重新觸發 (銷毀 -> 重建)

  // === Modal 資料內容 ===
  const projectData = {
    profile: {
      title: "個人詳細介紹",
      tags: ["Civil To IT", "Coordinator"],
      content: (
        <>
          <div style={{display:'flex', gap:'20px', alignItems:'center', marginBottom:'20px'}}>
             <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'#555', border:'3px solid #3b82f6'}}></div>
             <div>
                <h2 style={{margin:0}}>黃凱文 (Kevin)</h2>
                <p style={{margin:0, color:'#3b82f6'}}>Agile & Pragmatic</p>
             </div>
          </div>
          <p>從土木工程的嚴謹邏輯，跨越到資訊管理的靈活應用。</p>
          <hr style={{borderColor:'rgba(255,255,255,0.1)', margin:'20px 0'}}/>
          <ul>
            <li>🔥 抗壓性強：習慣高強度專案節奏</li>
            <li>🗣️ 跨域溝通：能翻譯工程師與設計師的語言</li>
          </ul>
        </>
      )
    },
    traffic: {
      title: "交通數據分析",
      tags: ["Python", "Machine Learning"],
      content: <p>使用 Python 進行國道車流量 M03A/M06A 數據清洗與預測模型訓練。</p>
    },
    civil: {
      title: "機電工程經歷",
      tags: ["AutoCAD", "Revit"],
      content: <p>曾任職於工程顧問公司，參與大型藥廠 GMP 建廠專案，熟悉 MEP 整合。</p>
    },
    contact: {
      title: "聯絡資訊",
      tags: ["Contact"],
      content: (
        <div style={{textAlign:'center'}}>
          <h2 style={{color:'#3b82f6', fontSize:'3rem', margin:'20px 0'}}>(*&gt;△&lt;)</h2>
          <p>k543314k@gmail.com</p>
          <p>joyboyk999k@gmail.com</p>
          <p>71a171d9a85c6@gmail.com</p>
          <p>nchem1361111@gmail.com</p>
        </div>
      )
    }
  };

  const placeholderStyle = { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.5 };

  return (
    <div className="app-wrapper" style={{position: 'relative', height: '100vh', width:'100vw', overflow: viewMode==='home'?'hidden':'auto'}}>
      
      {/* 1. 導航 Logo (移除了奇怪的 div 框框) */}
      <div className="nav-logo" onClick={() => { setViewMode('home'); setSelectedId(null); }}>
          {/* 這裡直接放 svg 圖片 (如果有) 或者直接用文字，不放空 div 了 */}
          {/* <img src={logoSvg} style={{width:24}} /> */}
          <h1>KEVIN</h1>
      </div>

      {/* 2. Vanta 背景 (只在 Home 顯示) */}
      {viewMode === 'home' && (
        <div ref={vantaRef} id="vanta-bg" style={{position:'absolute', zIndex:-1, width:'100%', height:'100%'}}></div>
      )}

      {/* 3. Modal 彈窗 (無 X 按鈕) */}
      <AnimatePresence>
        {selectedId && viewMode === 'home' && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projectData[selectedId] && (
                <>
                  <div style={{marginBottom:'10px'}}>
                     {projectData[selectedId].tags.map(t=><span key={t} className="modal-tag">#{t}</span>)}
                  </div>
                  <div style={{borderBottom:'1px solid rgba(255,255,255,0.1)', paddingBottom:'15px', marginBottom:'20px'}}>
                      <h2 style={{margin:0, fontSize:'1.8rem'}}>{projectData[selectedId].title}</h2>
                  </div>
                  <div className="modal-body">{projectData[selectedId].content}</div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. 主頁面 Bento Grid */}
      {viewMode === 'home' ? (
        <motion.div 
           className={`bento-container ${selectedId ? 'blur-background' : ''}`}
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        >
          {/* A. 個人介紹 */}
          <div className="col-span-1 row-span-2" onClick={() => setSelectedId('profile')}> 
            <motion.div whileHover={{ scale: 1.02 }} style={{height:'100%'}}>
                <div className="bento-card"> 
                    <div className="content-layer" style={{background:'none', color:'#fff', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
                        <div className="tag" style={{background:'#fff', color:'#000'}}>Profile</div>
                        <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'#555', border:'3px solid #3b82f6', marginBottom:'15px'}}></div>
                        <h2 style={{fontSize:'1.3rem'}}>黃凱文</h2>
                        <p style={{color:'#93c5fd', fontSize:'0.8rem'}}>Civil Eng. ➜ Data Analyst</p>
                    </div>
                </div>
            </motion.div>
          </div>

          {/* B. 美術作品 (跳轉 Gallery) */}
          <div className="col-span-3" onClick={() => setViewMode('art-gallery')}>
             <motion.div whileHover={{ scale: 1.02 }} style={{height:'100%'}}>
               <Tilt glareEnable={true} glareMaxOpacity={0.3} style={{height:'100%'}}>
                  <div className="bento-card">
                    <div className="bg-image" style={{...placeholderStyle, background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'}}></div>
                    <div className="content-layer">
                      <div className="tag" style={{background:'#ec4899'}}>Visual Design</div>
                      <div>
                          <h3>視覺語言設計作品集</h3>
                          <p>點擊查看完整作品展示牆 ➜</p>
                      </div>
                    </div>
                  </div>
               </Tilt>
             </motion.div>
          </div>

          {/* C. 交通數據 */}
          <motion.div whileHover={{ y: -5 }} style={{height:'100%'}} onClick={() => setSelectedId('traffic')}>
            <div className="bento-card">
               <div className="bg-image" style={{...placeholderStyle, background: 'linear-gradient(to top, #064e3b, #10b981)'}}></div>
               <div className="content-layer">
                 <div className="tag" style={{background:'#10b981'}}>Data</div>
                 <h4>交通數據分析</h4>
               </div>
            </div>
          </motion.div>

          {/* D. 機電經歷 */}
          <motion.div whileHover={{ y: -5 }} style={{height:'100%'}} onClick={() => setSelectedId('civil')}>
            <div className="bento-card">
              <div className="bg-image" style={{...placeholderStyle, background: 'linear-gradient(to top, #1e3a8a, #3b82f6)'}}></div>
              <div className="content-layer">
                 <div className="tag" style={{background:'#3b82f6'}}>Engineering</div>
                 <h4>建築機電經歷</h4>
              </div>
            </div>
          </motion.div>

          {/* E. 聯絡我 */}
          <div style={{height:'100%'}} onClick={() => setSelectedId('contact')}>
             <div className="bento-card">
                <div className="flip-card-inner">
                    <div className="flip-front" style={{background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <h2 style={{fontSize:'2rem', color:'#fff'}}>(*&gt;△&lt;)</h2>
                    </div>
                    <div className="flip-back"><h3>Contact</h3></div>
                </div>
             </div>
          </div>

          {/* F. 跑馬燈 (使用 tech-marquee-container 包裹) */}
          <div className="col-span-4">
             <div className="tech-marquee-container">
                 <div className="tech-marquee">
                    <div className="tech-track">
                       {/* === 第一組 === */}
                       <div className="tech-item">
                          <SiAutocad size={20} color="#E53935" /> 
                          <span style={{marginLeft:10}}>AutoCAD</span>
                       </div>
                       <div className="tech-item">
                          <SiAutodeskrevit size={20} color="#0696D7" /> 
                          <span style={{marginLeft:10}}>Revit</span>
                       </div>
                       <div className="tech-item">
                          <FaPython size={20} color="#3776AB" /> 
                          <span style={{marginLeft:10}}>Python</span>
                       </div>
                       <div className="tech-item">
                          <FaReact size={20} color="#61DAFB" /> 
                          <span style={{marginLeft:10}}>React</span>
                       </div>
                       <div className="tech-item">
                          <FaUnity size={20} color="#FFFFFF" /> 
                          <span style={{marginLeft:10}}>Unity</span>
                       </div>
                       <div className="tech-item">
                          <SiTableau size={20} color="#E97627" /> 
                          <span style={{marginLeft:10}}>Tableau</span>
                       </div>
                       <div className="tech-item">
                          <FaIndustry size={20} color="#aaa" /> 
                          <span style={{marginLeft:10}}>GMP Project</span>
                       </div>

                       {/* === 第二組 (複製一遍做無限循環) === */}
                       <div className="tech-item">
                          <SiAutocad size={20} color="#E53935" /> 
                          <span style={{marginLeft:10}}>AutoCAD</span>
                       </div>
                       <div className="tech-item">
                          <SiAutodeskrevit size={20} color="#0696D7" /> 
                          <span style={{marginLeft:10}}>Revit</span>
                       </div>
                       <div className="tech-item">
                          <FaPython size={20} color="#3776AB" /> 
                          <span style={{marginLeft:10}}>Python</span>
                       </div>
                       <div className="tech-item">
                          <FaReact size={20} color="#61DAFB" /> 
                          <span style={{marginLeft:10}}>React</span>
                       </div>
                       <div className="tech-item">
                          <FaUnity size={20} color="#FFFFFF" /> 
                          <span style={{marginLeft:10}}>Unity</span>
                       </div>
                       <div className="tech-item">
                          <SiTableau size={20} color="#E97627" /> 
                          <span style={{marginLeft:10}}>Tableau</span>
                       </div>
                       <div className="tech-item">
                          <FaIndustry size={20} color="#aaa" /> 
                          <span style={{marginLeft:10}}>GMP Project</span>
                       </div>
                    </div>
                 </div>
             </div>
          </div>

        </motion.div>
      ) : (
        /* 5. 作品牆頁面 */
        /* === 5. 作品展示牆 (Gallery View - App Style) === */
        <motion.div 
          className="gallery-container"
          initial={{ opacity: 0, x: 100 }} // 從右邊滑進來
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
        >
          
          {/* A. 固定標題列 */}
          <div className="gallery-header">
             <h2 style={{fontSize:'2rem', marginBottom:'5px', color:'#fff'}}>視覺語言設計作品集</h2>
             <p style={{color:'#888', display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{width:'8px', height:'8px', background:'#ec4899', borderRadius:'50%', display:'inline-block'}}></span>
                Visual Language Design & Creative Works
             </p>
          </div>

          {/* B. 內部捲動區域 */}
          <div className="gallery-scroll-area">
             <div className="gallery-grid">
                
                {/* --- 作品 1 --- */}
                <div className="gallery-item">
                   {/* 這裡模擬圖片，你可以換成 <img src={...} /> */}
                   <div className="gallery-img-box" style={{height:'220px', background:'linear-gradient(45deg, #333, #444)'}}></div>
                   <div className="gallery-info">
                      <h4>品牌識別拆解</h4>
                      <p>VI System / Logo Design</p>
                   </div>
                </div>

                {/* --- 作品 2 --- */}
                <div className="gallery-item">
                   <div className="gallery-img-box" style={{height:'300px', background:'linear-gradient(to top, #ec4899, #8b5cf6)'}}></div>
                   <div className="gallery-info">
                      <h4>色彩計畫實驗</h4>
                      <p>Color Theory & Emotion</p>
                   </div>
                </div>

                {/* --- 作品 3 --- */}
                <div className="gallery-item">
                   <div className="gallery-img-box" style={{height:'200px', background:'#222'}}></div>
                   <div className="gallery-info">
                      <h4>文字排版海報</h4>
                      <p>Typography & Layout</p>
                   </div>
                </div>

                {/* --- 作品 4 --- */}
                <div className="gallery-item">
                   <div className="gallery-img-box" style={{height:'250px', background:'#555'}}></div>
                   <div className="gallery-info">
                      <h4>創意拼貼作業</h4>
                      <p>Collage Art</p>
                   </div>
                </div>

                {/* --- 作品 5 --- */}
                <div className="gallery-item">
                   <div className="gallery-img-box" style={{height:'280px', background:'linear-gradient(to bottom, #10b981, #064e3b)'}}></div>
                   <div className="gallery-info">
                      <h4>期末專題展示</h4>
                      <p>Final Project Presentation</p>
                   </div>
                </div>

                {/* --- 作品 6 --- */}
                <div className="gallery-item">
                   <div className="gallery-img-box" style={{height:'220px', background:'#333'}}></div>
                   <div className="gallery-info">
                      <h4>設計草圖與發想</h4>
                      <p>Sketch & Brainstorming</p>
                   </div>
                </div>

             </div>
          </div>

        </motion.div>
      )}
    </div>
  );
}

export default App;