import React from 'react'
import { render } from 'react-dom'
import Posts from './Posts'
import PostDetails from './PostDetails'
import { Router, Route, hashHistory } from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={Posts} />
    <Route path='/posts/:slug' component={PostDetails} />
  </Router>,
  document.getElementById('app')
)
