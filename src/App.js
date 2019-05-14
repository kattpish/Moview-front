import React, { Component } from 'react' 
import './App.css'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from "react-router-dom"
import SwipeableRoutes from "react-swipeable-routes"

import Gallery from './Gallery'
import Share from './Share'

import Tag from './Tag'
import Content from './Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioURL: ""
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <Router>
        <div className="App">
            <SwipeableRoutes>  
              <Route path="/gallery" component={Gallery} />
              <Route path="/share" component={Share} />
              <Route path="/tag" component={Tag} />
              <Route path="/content" component={Content} />
            </SwipeableRoutes>   
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
