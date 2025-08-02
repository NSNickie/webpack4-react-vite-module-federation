import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@ant-design/v5-patch-for-react-19'
import { StyleProvider } from '@ant-design/cssinjs'
import tailwindcssText from './index.css?inline'
import type { JSX } from 'react'

//使用Shadow DOM隔离样式

interface RenderReactAppOptions<T extends JSX.IntrinsicAttributes> {
  mountId: string
  Component: React.ComponentType<T>
  props: T
}

export function RenderDOM<T extends JSX.IntrinsicAttributes>({
  mountId,
  Component,
  props,
}: RenderReactAppOptions<T>): void {
  const shadowRoot = document
    .getElementById(mountId)!
    .attachShadow({ mode: 'open' })
  const container = document.createElement('div')

  //注入Tailwindcss
  const style = document.createElement('style')
  style.textContent = tailwindcssText
  shadowRoot.appendChild(container)
  shadowRoot.appendChild(style)

  createRoot(container!).render(
    <StyleProvider container={shadowRoot}>
      <StrictMode>
        <Component {...props} />
      </StrictMode>
    </StyleProvider>
  )
}
