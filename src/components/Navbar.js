import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = { navOpen: false }
  
  toggleNavBar = () => this.setState({ navOpen: !this.state.navOpen }) 

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Home</Link>
            <a 
              className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavBar}
            ></a>
          </div>
          <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to='/all'>See All Mushrooms</Link>
              <Link className="navbar-item" to='/edible'>Edible Mushrooms</Link>
              <Link className="navbar-item" to='/poisonous'>Poisonous Mushrooms</Link>
              <Link className="navbar-item" to='register'>Register</Link>
              <Link className="navbar-item" to='login'>Login</Link>
            </div>

          </div>


        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)