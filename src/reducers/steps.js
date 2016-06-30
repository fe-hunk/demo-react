/**
 * Created by lujiaju on 16/7/1.
 */
/**
 * Created by lujiaju on 16/6/30.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';
const reducer = handleActions({
  ['app'](state,action={newstate:{}}){
    return {...state,...action.newstate};
  }
}, {
  status:'one'
});
export default reducer
