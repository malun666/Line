import React, {Component} from 'react'

import { Link, Switch, Route } from 'react-router-dom';

import About from './About';
import Product from './Product';

class Home extends Component {

  constructor (props) {
    super(props)
    if(!sessionStorage.getItem('login')) {
      this.props.history.push('/login?url=' + this.props.match.url);
    }
  }
  

  logOut = () => {
    sessionStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="layout">
        <div className="header container is-fluid">

          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/app">
                <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28"/>
              </Link>

            
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/app">
                  Home
                </Link>

                <Link className="navbar-item" to="/app/product">
                  Porduct
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <input type="button" className="button is-primary"  onClick={ this.logOut } value="退出" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </div>
        <main className="columns section">
          <div className="leftbar column is-one-fifth has-background-primary">
            <p>
              <Link to={`${this.props.match.path}/product`}>产品</Link>
            </p>
            <p>
              <Link to={`${this.props.match.path}/about`}>关于</Link>
            </p>
          </div>
          <div className="main-cont column has-background-light">
            <Switch>
              <Route path={`${this.props.match.path}/product`} component={Product}></Route>
              <Route path={`${this.props.match.path}/about`} component={About}></Route>
              <Route render={ () => {
                return (
                  <div>欢迎加入 aicoder.com 大家庭！ </div>
                )
              }}></Route>
            </Switch>
          </div>
        </main>
        <div className="footer">
          版权所有@aicoder.com
        </div>
      </div>
    )
  }
}

export default Home