import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@ant-design/v5-patch-for-react-19'
import { StyleProvider } from '@ant-design/cssinjs'
import tailwindcssText from './index.css?inline'

//使用Shadow DOM隔离样式
const shadowRoot = document.getElementById('react-home')!.attachShadow({ mode: 'open' })
const container = document.createElement('div');

//注入Tailwindcss
const style = document.createElement("style");
style.textContent = tailwindcssText;
shadowRoot.appendChild(container);
shadowRoot.appendChild(style);

createRoot(container!).render(
    <StyleProvider container={shadowRoot}>
      <StrictMode>
        <App />
      </StrictMode>
    </StyleProvider>
)
