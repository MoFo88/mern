import React, { Component } from 'react'

export default class PostDetails extends Component {
  render () {
    return (
      <div>
        <h2>Post Details</h2>
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
      </div>
    )
  }
}
