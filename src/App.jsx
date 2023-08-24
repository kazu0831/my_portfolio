import './App.css'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className='container'>
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<Works />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
    </>
  )
}

export default App
