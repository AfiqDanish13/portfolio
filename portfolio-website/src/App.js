import './App.css';
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className='root'>
      {/* Header start */}
      <NavigationBar />
      {/* Header end */}

      {/* Hero start */}
      <Hero/>
      {/* Hero end */}

      {/* About start */}
      <About/>
      {/* About start */}

      {/* Project Start */}
      <Project />
      {/* Project End */}

      {/* {/*Contact Start */}
      <Contact />
      {/* Contact End */}

      {/* Footer Start */}
      <Footer/>
      {/* Footer End */}
    </div>

  )
}

export default App;
