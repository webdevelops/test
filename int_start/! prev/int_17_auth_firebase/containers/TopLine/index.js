import React, { useState } from 'react'

import ToggleMenu from 'components/navigation/ToggleMenu'
import Drawer from 'components/navigation/Drawer'

const TopLine = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleMenu = () => setIsOpen(!isOpen)
  const onCloseMenu = () => setIsOpen(false)

  return (
    <div className='top-line'>
      <ToggleMenu isOpen={isOpen} onToggleMenu={onToggleMenu} />
      <Drawer isOpen={isOpen} onCloseMenu={onCloseMenu} />
    </div>
  )
}

export default TopLine


// -------------- with class component ----------
// import React, {Component} from 'react'

// import ToggleMenu from 'components/navigation/ToggleMenu'
// import Drawer from 'components/navigation/Drawer'

// class TopLine extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isOpen: false
//     }
//     this.onToggleMenu = this.onToggleMenu.bind(this)
//     this.onCloseMenu = this.onCloseMenu.bind(this)
//   }

//   onToggleMenu() {
//     this.setState(state => {
//       return {
//         isOpen: !state.isOpen
//       }
//     })
//   }

//   onCloseMenu() {
//     this.setState({
//       isOpen: false
//     })
//   }

//   render() {
//     const {isOpen} = this.state

//     return (
//       <div className='top-line'>
//         <ToggleMenu isOpen={isOpen} onToggleMenu={this.onToggleMenu} />
//         <Drawer isOpen={isOpen} onCloseMenu={this.onCloseMenu} />
//       </div>
//     )
//   }
// }

// export default TopLine