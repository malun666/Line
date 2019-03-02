import React, { Component } from 'react'

import store from '../store';
import { ActionCreators } from '../store/ActionTypes';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      User: []
    }
    store.subscribe(() => {
      // let len = store.getState().User.length;
      // this.setState({total: len});
      this.setState({User: store.getState().User})
    })
  }

  loadUsers = () => {
    let data = [{
      Name: 'laoma',
      age: 18
    },{
      Name: 'laoma888',
      age: 19
    },{
      Name: 'laoma666',
      age: 120
    }];
    store.dispatch(ActionCreators.LoadUsers(data));
  }

  render () {
    return (
      <div>
        总条数：{ this.state.total }
        <hr/>
        {
          store.getState().User.map(item => {
            return (
              <div>
                {item.Name} - {item.age}
              </div>
            )
          })          
        }

        <hr/>
        <input 
          onClick={ this.loadUsers }
          type="button" value="加载用户数据"/>
      </div>
    )
  }
}

export default Product