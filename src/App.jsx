import './App.css'
import { NavBar } from './components/Common/NavBar'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog_page/Blog'
import Contact from './components/Contact_page/Contact'
import Home from './components/Top_page/Home'
import Works from './components/Works_page/Works'

function App() {

  return (
    <>
      <div>

          <NavBar />

          <Routes>
            <Route exact path='/my_portfolio' element={<Home />} />
            <Route path='/my_portfolio/works' element={<Works />} />
            <Route path='/my_portfolio/blog' element={<Blog />} />
            <Route path='/my_portfolio/contact' element={<Contact />} />
          </Routes>
      </div>
    </>
  )
}

export default App
