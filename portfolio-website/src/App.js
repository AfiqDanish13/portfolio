import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'


import "./style/landingPage.css"


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>
      

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
