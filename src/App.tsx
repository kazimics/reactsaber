import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import router from './router'
import 'assets/css/reset.css'

function App() {
  return <Suspense fallback={<>loading</>}>{useRoutes(router)}</Suspense>
}

export default App
