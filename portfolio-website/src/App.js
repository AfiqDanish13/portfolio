import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'


import "./style/landingPage.css"


function App() {
  return (
    <div className='root'>
      {/* Header start */}
      <header><NavigationBar /></header>
      {/* Header end */}

      {/* Hero start */}
      <Intro/>
      {/* Hero end */}
      


      

      {/* <div className="project">
        <Project />
      </div>

      <div className="superhero">
        <About />
      </div>

      <div className="contact">
        <Contact />
      </div> */}



    </div>

  )
}

export default App;
