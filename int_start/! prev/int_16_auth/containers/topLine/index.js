import React, { Component } from 'react'

import ToggleMenu from 'components/navigation/toggleMenu'
import Drawer from 'components/navigation/drawer'

class TopLine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.onToggleMenuHandler = this.onToggleMenuHandler.bind(this)
    this.onCloseHandler = this.onCloseHandler.bind(this)
  }

  onToggleMenuHandler() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  onCloseHandler() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div className='top-line'>
        <ToggleMenu
          isOpen={isOpen}
          onToggleMenu={this.onToggleMenuHandler}
        />
        <Drawer isOpen={isOpen} onClose={this.onCloseHandler} />
      </div>
    )
  }
}

export default TopLine