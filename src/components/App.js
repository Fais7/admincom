import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'
import Adminlog from './Adminlog'
import Images from './Images'
const App = () => {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/About" component={About} ></Route>
        <Route exact path="/Contact" render={()=><Contact name="welcome to contact" />} ></Route>
        <Route exact path="/Adminlog" component={Adminlog}></Route>
        <Route exact path="/Images" component={()=><Images name="Tanveer bhai" />} />
        <Route component={Error} ></Route>
      </Switch>
    </div>
  )
}

export default App
