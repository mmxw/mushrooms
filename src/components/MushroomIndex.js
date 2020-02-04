import React from 'react'
import axios from 'axios'
import MushroomCard from './MushroomCard'
import SearchBar from './SearchBar'
import NotFound from './NotFound'

class MushroomIndex extends React.Component {
  state = {
    mushrooms: [],
    userInput: ''
  }
  async componentDidMount() {
    try {
      const mushrooms = await axios.get('localhost:4000/api/mushrooms')
      console.log(mushrooms.data)
      this.setState({ mushrooms: mushrooms.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (userInput) => {
    this.setState( { userInput })
  }

  render() {
    const mushroomArr = this.state.mushrooms.filter(mushroom => mushroom.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    return (
      <section>
        <div>
          <SearchBar onChange={ this.handleChange } />
          <div className="columns is-mobile is-multiline">
            {mushroomArr.length === 0 && this.state.userInput ? <NotFound /> : mushroomArr.map(mushroom => 
              <MushroomCard key={ mushroom._id } {...mushroom} /> )}
          </div>
        </div>
      </section>
    )
  }
}

export default MushroomIndex