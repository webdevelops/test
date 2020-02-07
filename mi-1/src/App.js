import React, {Component} from 'react'

import NavBar from './components/NavBar'
import CourseList from './components/courseList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    )
  }
}

export default App