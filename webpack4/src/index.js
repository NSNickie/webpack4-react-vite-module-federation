import './styles/main.css';
import { formatTime } from './utils/time';
import { createLogger } from './utils/logger';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage.jsx';
import { StrictMode } from 'react'



// 创建日志记录器
const logger = createLogger('App');

// 应用初始化
class App {
  constructor() {
    this.init();
  }

  init() {
    logger.info('应用启动中...');
    this.setupEventListeners();
    this.updateTime();
    this.updateBuildTime();
    this.loadRemoteApp();
    logger.info('应用启动完成');
  }

  setupEventListeners() {
    const updateBtn = document.getElementById('update-btn');
    if (updateBtn) {
      updateBtn.addEventListener('click', () => {
        this.updateTime();
        logger.info('时间已更新');
      });
    }
  }

  updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
      timeElement.textContent = formatTime(new Date());
    }
  }

  updateBuildTime() {
    const buildTimeElement = document.getElementById('build-time');
    if (buildTimeElement) {
      buildTimeElement.textContent = formatTime(new Date());
    }
  }

  async loadRemoteApp() {
    // console.log("----------------?------- ReactApp", ReactApp);con
    console.log("----------------?------- Homepage", Homepage);
    const root = ReactDOM.createRoot(document.getElementById("react-home"));
    root.render(  
    <StrictMode>
      <Homepage />
    </StrictMode>
    );
  }
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

// 导出应用类（可选）
export default App; 