import Home from './Home'
import { RenderDOM } from '@/render-dom'

const ExportHome = RenderDOM({
  mountId: 'react-home',
  Component: Home,
  props: {},
})

export default ExportHome
