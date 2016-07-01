/**
 * Created by lujiaju on 16/7/1.
 */
/**
 * Created by lujiaju on 16/6/30.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';
const reducer = handleActions({
  ['steps'](state,action={newstate:{}}){
    return {...state,...action.newstate};
  }
}, {
  status:1,
  mileStone:{
    step1:'选择模板',
    step2:'编辑表单',
    step3:'生成表单'
  }
});
export default reducer
