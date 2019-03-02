import React, { Component } from 'react'

class Login extends Component {
  login = () => {
    sessionStorage.setItem('login', Date.now());
    this.props.history.push('/app');
  }
  render () {
    return (
      <div>
        login
        <input type="button" value="登录"
          onClick={this.login}
        />
      </div>
    )
  }
}

export default Login