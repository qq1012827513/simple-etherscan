import { useEffect } from 'react'
import Header from './components/header'
import { Outlet } from 'react-router'
import Footer from './components/footer'

function App() {
  useEffect(() => {})
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
