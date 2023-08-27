import './App.css'
import { NavBar } from './components/Common/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Top/Home'
import Works from './components/Works'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className='bg-gradient-to-r from-blue-500 to-purple-500'>

          <NavBar />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/works' element={<Works />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
    </>
  )
}

export default App
