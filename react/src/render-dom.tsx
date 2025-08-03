import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@ant-design/v5-patch-for-react-19'
import { StyleProvider } from '@ant-design/cssinjs'
import tailwindcssText from './index.css?inline'
import { ConfigProvider } from 'antd'
//使用Shadow DOM隔离样式
interface RenderReactAppOptions<T> {
  mountId: string
  Component: React.ComponentType<T>
  props: T
}

export function RenderDOM<T extends object>({
  mountId,
  Component,
  props,
}: RenderReactAppOptions<T>): void {
  const shadowRoot = document
    .getElementById(mountId)!
    .attachShadow({ mode: 'open' })
  const mountElement = document.getElementById(mountId)
  const container = document.createElement('div')
  mountElement?.appendChild(container)

  //注入Tailwindcss
  const style = document.createElement('style')
  style.textContent = tailwindcssText
  shadowRoot.appendChild(container)
  shadowRoot.appendChild(style)

  const popupShadowRoot = initPopupShadowRoot()

  createRoot(container!).render(
    <StyleProvider container={shadowRoot}>
      <ConfigProvider getPopupContainer={() => popupShadowRoot.getElementById('popup-root')!}>
        <StrictMode>
          <Component id={mountId} {...props} />
        </StrictMode>
      </ConfigProvider>
    </StyleProvider>
  )
  // 在 AntD 样式渲染完后 clone 样式到 popup 容器
  observeAndCloneAntDStyles(shadowRoot, popupShadowRoot)
}

function initPopupShadowRoot(): ShadowRoot {
  const overlayHost = document.createElement('div')
  overlayHost.id = 'overlay-container'
  document.body.appendChild(overlayHost)

  const popupShadowRoot = overlayHost.attachShadow({ mode: 'open' })

  // 弹窗挂载点
  const popupRoot = document.createElement('div')
  popupRoot.id = 'popup-root'
  popupShadowRoot.appendChild(popupRoot)

  return popupShadowRoot
}

function observeAndCloneAntDStyles(from: ShadowRoot, to: ShadowRoot) {
  const observer = new MutationObserver(() => {
    const styleSheets = from.querySelectorAll('style[data-rc-order]')
    if (styleSheets.length > 0) {
      // clone 所有样式进去
      console.log(styleSheets)
      styleSheets.forEach(styleNode => {
        const clone = styleNode.cloneNode(true) as HTMLStyleElement
        to.appendChild(clone)
      })
      observer.disconnect()
    }
  })

  observer.observe(from, {
    childList: true,
    subtree: true,
  })
}
