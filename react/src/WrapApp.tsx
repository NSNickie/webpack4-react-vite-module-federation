import { StrictMode } from 'react'
import { StyleProvider } from '@ant-design/cssinjs'

type Props = {
  shadowRoot: ShadowRoot
  children: React.ReactNode
}

export default function WrapApp({ shadowRoot, children }: Props) {
  return (
    <StyleProvider container={shadowRoot}>
      <StrictMode>{children}</StrictMode>
    </StyleProvider>
  )
}
