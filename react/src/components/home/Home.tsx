import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button as AntdButton } from 'antd'
import WrapApp from '../../WrapApp.tsx'
import tailwindcssText from '@/index.css?inline'

export default function Home() {
  //使用Shadow DOM隔离样式
  const host = document.getElementById('react-home')!
  const shadowRoot = host.attachShadow({ mode: 'open' })
  const container = document.createElement('div')

  //注入Tailwindcss
  const style = document.createElement('style')
  style.textContent = tailwindcssText
  shadowRoot.appendChild(container)
  shadowRoot.appendChild(style)

  return (
    <WrapApp
      shadowRoot={shadowRoot}
      children={
        <>
          <div className="tw:flex tw:gap-4">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Home Page</h1>
          <div className="tw:flex tw:flex-col tw:gap-4">
            <AntdButton className="tw:w-40" type="primary">
              Hello Antd!
            </AntdButton>
            <p className="tw:text-2xl">Powered with Tailwindcss</p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      }
    ></WrapApp>
  )
}
