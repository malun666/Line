import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render () {
    return (
      <div>
        404!
        <hr/>
        <Link to="/home">回到首页</Link>
      </div>
    )
  }
}

export default PageNotFound