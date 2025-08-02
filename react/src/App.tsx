import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button as AntdButton } from 'antd'

function App() {
  return (
    <>
      <div className="tw:flex tw:gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
  )
}

export default App
