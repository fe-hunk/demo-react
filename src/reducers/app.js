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
  data:[
    {id:0,value:'填空题',questionIndex:'13-16',type:1},
    //{id:1,value:'填空题',questionIndex:14,type:1},
    //{id:2,value:'填空题',questionIndex:15,type:1},
    //{id:3,value:'填空题',questionIndex:16,type:1},
    {id:4,value:'选择题',questionIndex:17,type:2},
    {id:5,value:'选择题',questionIndex:18,type:2},
    {id:6,value:'选择题',questionIndex:19,type:2},
  ]
});
export default reducer
