/**
 * Created by lujiaju on 16/7/1.
 */
import { message} from 'antd';
class Http {
  constructor(method, ...arg) {
    // const base_url = './testjson';
    // const base_url='http://localhost/proxy';
    const base_url='/';
    let [url,data] = arg;
    url=base_url + url;
    // url+='.json';
    if(method=='GET'){
      let [base,search] = url.split('?');
      let obj=route_param(search);
      data={...obj,...data};
      url=base+'?'+param(data);
    }else{
      data=param(data);
    }

    let xhr = new XMLHttpRequest();
    xhr.open(method, url,true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.timeout=10000;
    xhr.send(data);
    xhr.ontimeout=()=>{
    }
    xhr.onreadystatechange =()=>{
      if(xhr.readyState != 4){
        return;
      }
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        try {
          let json=JSON.parse(xhr.responseText)
          if(!json) throw new Error('not a json');
          if(json.status==0){
            this.success_fn && this.success_fn(json, xhr);
          }else{
            this.error_fn && this.error_fn(xhr.statusText || null, xhr.status, xhr);
            message.error(json.msg,2);
            if(json.status==1){
              location.hash='/login';
            }
          }
        } catch (e) {
          console.error(e);
        }
      }else{
        this.error_fn && this.error_fn(xhr.statusText || null, xhr.status, xhr);
        message.error('请求失败!',2);
      }
      xhr = null;
    }
  }
  success(fn) {
    this.success_fn = fn;
    return this;
  }
  error(fn) {
    this.error_fn = fn;
    return this;
  }
}
export function $get(...arg) {
  return new Http('GET', ...arg);
};
export function $post(...arg) {
  return new Http('POST', ...arg);
}
export function $delete(...arg) {
  return new Http('DELETE', ...arg);
}
export function $put(...arg) {
  return new Http('PUT', ...arg);
}

export function route_param(s) {
  let search = s || location.search.substr(1);
  let obj = {};
  if(!search){
    return obj;
  }
  let arr = search.split('&').forEach((item) => {
    const [key,value] = item.split('=');
    obj[key] = value;
  });
  return obj;
}
export function param(obj){
  let arr=[];
  for (var key in obj) {
    let value=obj[key];
    if (typeof key=='function') value = value()
    if (value instanceof(Array)) value = value.join(',')
    if (value == null) value = ""
    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
  }
  return arr.join('&');
}
export function $dispatch(newstate={},type=''){
  window.store.dispatch({type:type,newstate:newstate});
}
export function $getState(reducer){
  return window.store.getState()[reducer];
}
export const thunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
  // if(action.type===undefined){
  //   const new_action={
  //     type:'default',
  //     newstate:action
  //   }
  //   return next(new_action);
  // }else{
  //   return next(action);
  // }
}
export const entends = Object.assign || function ( target ) {
      for ( var i = 1; i < arguments.length; i++ ) {
        var source = arguments[ i ];
        for ( var key in source ) {
          if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
            target[ key ] = source[ key ];
          }
        }
      }
      return target;
    };
/**
 * 单项绑定数据到 this._data里面
 * @param  {[type]}   key        [key]
 * @param  {[type]}   _this=this [this]
 * @param  {Function} fn         [绑定前调用函数 如果return:false终止执行]
 * @return {Function}            [返回一个函数]
 */
export const $bindData = (key,_this=this,fn)=>(...arg) =>{
  try {
    if(!_this || typeof _this != 'object'){
      throw new Error('第一个参数this必须传!')
      return;
    }
    if(fn){
      if(fn.call(_this,...arg)===false){
        return false;
      }
    }
    if(!_this._data){
      _this._data={}
    }else{

      _this._data[key]=arg[0].target.value;
    }
  } catch (err) {
    console.error(err);
  }
}
export const _data={};
