import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Posts from './Posts'
import PostDetails from './PostDetails'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Posts} />
    <Route path='/posts/:slug' component={PostDetails} />
  </Router>,
  document.getElementById('app')
)
