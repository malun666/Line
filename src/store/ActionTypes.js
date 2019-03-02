const ActionTypes = {
  UserLoaded: 'USER_LOADED',
  AddUser:'ADD_USER'
}

const ActionCreators = {
  LoadUsers(payload) {
    return {
      type: ActionTypes.UserLoaded,
      payload
    }
  },
  LoadUserByIdAsync(id) {
    return function (dispatch, getState) {
      setTimeout( () => {
        let data = [{Name: 'ssss', age: id},{Name: 'ssss3333333', age: id},];
        dispatch(ActionCreators.LoadUsers(data));
      }, 1000);
    }
  },
  AddUser : (payload) => ({type: ActionTypes.AddUser, payload})
}

export {
  ActionTypes,
  ActionCreators
}