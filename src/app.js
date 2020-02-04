import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import axios from 'axios'
import 'bulma'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import MushroomIndex from './components/MushroomIndex'
import MushroomCard from './components/MushroomCard'
import Navbar from './components/Navbar'


class App extends React.Component {

  state = {
    mushrooms: []
  }
  
  getData = async () => {
    try {
      const response = await axios.get('/api/mushrooms')
      const mushrooms = response.data
      this.setState({ mushrooms })
      console.log(mushrooms)
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    console.log('mounting')
    this.getData()
  }

  render() {
    console.log('rendering')
    return (
      <BrowserRouter>
        <>
          <Navbar /> {/* TODO */}
          <Switch>
            <Route exact path='/' component={Home} /> {/* TODO */}
            <Route path='/all' component={MushroomIndex} /> {/* TODO */}
            <Route path='/mushrooms' component={MushroomIndex} /> {/* TODO */}
            <Route path='/mushrooms/:id' compnent={MushroomCard} /> {/* TODO */}
          </Switch>      
        </>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)