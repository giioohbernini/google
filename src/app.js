'use strict'

import React, { PureComponent } from 'react'
import Pagination from 'components/googlenav'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      activePage: 1,
      total: 20
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (page) {
    this.setState({
      activePage: page
    })
  }

  render () {
    return (
      <div>
        <h1>Total: {this.state.total}</h1>
        <h2>Active Page: {this.state.activePage}</h2>
        <Pagination activePage={this.state.activePage} total={this.state.total} pageLink='/page/%page%/' onClick={this.handleClick} />
      </div>
    )
  }
}

export default App
