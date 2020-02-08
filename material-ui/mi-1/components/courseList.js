import React, { Component } from 'react'
import Grig from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = ''
const ACCESS_TOKES = ''

const client = contenful.createClient({
  spase: SPACE_ID,
  accessToken: ACCESS_TOKES
})

class CourseList extends Component {
  state = {
    courses: [],
    searchString: ''
  }

  constructor() {
    super()
    this.getCourses()
  }

  getCourses = () => {
    client.getEntries({
      content_type: 'course',
      query: this.state.searchString
    })
      .then((response) => {
        this.setState({ courses: response.item })
      })
      .catch((error) => {
        console.log('Error occured while fetching data')
        console.log(error)
      })
  }

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target, value })

    } else {
      this.setState({ searchString: '' })
    }
  }

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id='searchInput'
              placeholder='Search For Courses'
              margin='normal'
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{padding: 24}}>
              {this.state.courses.map(currentCourse => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Course course={currentCourse} /> 
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No courses found"}
      </div>
    )
  }
}

export default CourseList;