

import './App.css'
import Header from './components/header/header'
import Home from './components/home/home'
import Middle from './components/middle/middle'
import Courses from './components/courses/courses'
import Footer from './components/footer/footer'

function App() {
  

  return (
    <div className="app">
      <Header />
      <Home />
      <Middle />
      <Courses />
      <Footer />
    </div>
  )
}

export default App
