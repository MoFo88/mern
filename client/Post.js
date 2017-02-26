import React, { Component } from 'react'

export default class Post extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Post.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string
}
