import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios'

export default class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount () {
    axios.get('/api/posts')
      .then((response) => {
        console.log(response)

        this.setState({
          posts: response.data
        })
      })
      .catch((e) => {
        console.error(e.message)
      })
  }

  render () {
    return (
      <div>
        <h3>
          Hello {this.props.name} from component!
        </h3>
        {this.state.posts.map(post =>
          <Post key={post.slug} {...post} />
        )}
      </div>
    )
  }
}

Posts.propTypes = {
  name: React.PropTypes.string
}
