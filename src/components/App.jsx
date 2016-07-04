import React, { Component, PropTypes } from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import {Row,Col,Button,Input,Steps} from 'antd'
import {connect} from  'react-redux'
import MySteps from './Steps'
import update from 'react/lib/update';

const style={
  main:{
    margin:'0 auto',
    width:'80%',
    padding:'30px 20px'
  }
}
const Step = Steps.Step

@connect(({app})=>({app}))
@connect(({steps})=>({steps}))
class App extends Component{
  constructor(props){
    super()
    this.didChange = false
    this.state = {}
  }
  componentWillMount(){
    let {steps} = this.props;
    this.setState(update(this.state,{
      $set:{
        stepStatus:steps.status
      }
    }))
  }
  componentWillReceiveProps({steps}){

  }
  //shouldComponentUpdate({steps}){
  //  if(this.didChange){
  //    this.didChange = false;
  //    console.log('!!!!')
  //    return true
  //  }
  //  console.log('shouldComponentUpdate')
  //  return false
  //}
  click(){
    let {steps} = this.props;
    steps.status++
    this.setState(update(this.state,{
      $set:{
        stepStatus:steps.status
      }
    }))
    this.$dispatch('steps',steps)
    this.didChange = true
  }
  modifyRedux(){
    let {steps} = this.props
    steps.text = 'hello,world'
    this.$dispatch(steps,'steps')
  }

  render(){
    const {app,steps} = this.props;
    return(
        <div style={style.main}>
          <div>
            <Row>
              <Col span={24}>
                <MySteps status={this.state.stepStatus}/>
              </Col>
            </Row>
            <Button onClick={::this.click}>改变状态</Button>
            <span style={{color:'green'}}>父级元素改变状态,子元素用componentWillReceiveProps捕获参数改变,然后shouldComponentUpdate来判断是否改变</span>
            <br/>
            <Button onClick={::this.modifyRedux}>直接改变redux</Button>
            <span style={{color:'yellowgreen'}} >看看直接改变redux渲染要走多少步</span>
          </div>
        </div>
    )
  }
}

App.propTypes = {
};

export default App;
