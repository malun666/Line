import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../store/ActionTypes'

// 映射状态树
function mapStateToProps(state) {
  return {
    UserList: state.User
  };
}

// 映射action
function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      let data = [{Name: 'hi,acidoer', age: 3333}];
      dispatch(ActionCreators.LoadUsers(data));
    },
    loadAsync(num) {
      dispatch(ActionCreators.LoadUserByIdAsync(num))
    }
  };
}

class Demo extends Component {

  componentWillMount() {
    
  }

  render() {
    return (
      <div>
        {
          this.props.UserList.map( item => item.Name )
        }
        <hr/>
        <input type="button" value="加载"
          onClick={this.props.loadUsers}
        />
        <hr/>
        <input
          onClick={ () => this.props.loadAsync(98) }
         type="button" value="异步的修改"/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);