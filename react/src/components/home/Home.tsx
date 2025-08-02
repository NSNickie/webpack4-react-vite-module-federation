import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button as AntdButton } from 'antd'
import { Button as ShadcnButton } from '@/components/ui/button'

export default function Home() {
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
      <h1>Home Page</h1>
      <div className="tw:flex tw:flex-col tw:gap-4">
        <AntdButton color="cyan" variant="dashed" className="tw:w-40">
          Hello Antd!
        </AntdButton>
        <ShadcnButton variant="outline" className="tw:w-40 tw:cursor-pointer">
          Hello Shadcn!
        </ShadcnButton>
        <p className="tw:text-2xl">Powered with Tailwindcss</p>
      </div>
      <p className="read-the-docs">
      
      </p>
    </>
  )
}
