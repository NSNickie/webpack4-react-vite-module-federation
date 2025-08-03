import Header from './Header'
import { RenderDOM } from '@/render-dom'

const ExportHeader = RenderDOM({
  mountId: 'react-header',
  Component: Header,
  props: {},
})

export default ExportHeader
