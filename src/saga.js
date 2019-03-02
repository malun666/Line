import { ActionCreator, ActionTypes } from './store/Action';
import { call, takeEvery, put, all, select } from 'redux-saga/effects'

function* loadUsers(action) {
  let userList = yield call(()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve([{id: 1, age: 19, name: 'laoma'}, {id: 2, age: 19, name: 'l2aoma'}])
      }, 600);
    });
  });
  console.log(userList);
  yield put(ActionCreator.LoadUserListSuccessAction(userList));
}
function* removeUser(action) {
  const UserList = yield select(state => state.UserList);
  console.log(UserList);
  let user = yield call(()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const delUser = UserList.find(item => item.id === action.payload.id);
        if(delUser) {
          resolve(delUser);
        }
        reject('没有找到user')
      }, 600);
    });
  });
  console.log(user);
  yield put(ActionCreator.RemoveUserSuccess(user));
}

function* rootSaga() {
  // yield takeEvery(ActionTypes.LoadUserList, loadUsers)
  // yield 
  yield all([
    takeEvery(ActionTypes.LoadUserList, loadUsers),
    takeEvery(ActionTypes.RemoveUser, removeUser)
  ])
}

export default rootSaga;