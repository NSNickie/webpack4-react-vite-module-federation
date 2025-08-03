import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button as AntdButton } from 'antd'
import useStore from '@/stores'

export default function Header() {
  //使用Shadow DOM隔离样式
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
      <h1>Header</h1>
      <div className="tw:flex tw:flex-col tw:gap-4">
        <p>Zustand's bears: {useStore(state => state.bears)}</p>
        <AntdButton
          color="blue"
          variant="solid"
          className="tw:w-40 "
          onClick={() => useStore.getState().increasePopulation()}
        >
          Increase Bears
        </AntdButton>
        <p className="tw:text-2xl">
          Powered with Tailwindcss, pnpm, vite, zustand.
        </p>
      </div>
      <p className="read-the-docs"></p>
    </>
  )
}
