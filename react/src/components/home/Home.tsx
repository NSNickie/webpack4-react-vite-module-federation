import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button as AntdButton, Modal as AntdModal } from 'antd'
import { Button as ShadcnButton } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

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
        <AntdButton
          onClick={showModal}
          type="primary"
          className="tw:w-40"
        >
          Hello Antd!!
        </AntdButton>
        <AntdModal
          title="Hello Antd Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
        >
          <p>这是一个 Antd Modal 的内容</p>
          <p>你可以在这里添加任何内容</p>
        </AntdModal>
        <ShadcnButton variant="outline" className="tw:w-40 tw:cursor-pointer">
          Hello Shadcn!
        </ShadcnButton>
        <p className="tw:text-2xl">Powered with Tailwindcss</p>
      </div>
      <p className="read-the-docs"></p>
    </>
  )
}
