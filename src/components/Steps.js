/**
 * Created by lujiaju on 16/7/1.
 */
import React, { Component, PropTypes } from 'react';
import {Row,Col,Button,Input,Steps} from 'antd'
import {connect} from  'react-redux'
import update from 'react/lib/update';

const Step = Steps.Step

@connect(({steps})=>({steps}))
class MySteps extends Component{
  constructor(props){
    super()
    this.state = {
      stepStatus:{
        step1:'wait',
        step2:'wait',
        step3:'wait'
      }
    }
  }
  componentWillMount(){
    let {steps} = this.props
    this.setState(update(this.state, {
        $set:{
          mileStone:steps.mileStone,
          stepStatus:this.reduceStatus(this.props.status),
          status:this.props.status,
        }
    }))
    console.info('componentWillMount','1')
  }
  componentWillReceiveProps({steps}){
    console.info('componentWillReceiveProps','2')
    this.setState(update(this.state, {
      $set:{
        stepStatus:this.reduceStatus(steps.status)
      }
    }))
    console.log(this.state)
  }
  shouldComponentUpdate({steps}){
    console.info('shouldComponentUpdate','3')
    let condition1 = steps.mileStone.step1 != this.state.mileStone.step1
    let condition2 = steps.status != this.state.status
    //{
    // condition1:'捕获本身改变text(this.changeStepText)',
    // condition2:'捕获父元素改变了status(this.props.click)'
    // }
    if(condition1 || condition2){
      console.log('组件将要更新')
      return true
    }
    console.log('组件不会更新')
    return false
  }
  componentWillUpdate(){
    console.info('componentWillUpdate','4')
  }
  componentDidUpdate(){
    console.info('componentDidUpdate','5')
  }
  componentDidMount(){
    console.info('componentDidMount','6')
    this.reduceStatus(this.props.status)
  }
  componentWillUnmount(){
    console.info('componentWillUnmount','7')
  }
  reduceStatus(status){
    switch (status){
      case 1:
          console.log(1)
        return {
          step1:'finish',
          step2:'wait',
          step3:'wait'
        }
      case 2:
          console.log(2)
        return {
          step1:'finish',
          step2:'finish',
          step3:'wait'
        }
      case 3:
          console.log(3)
        return {
          step1:'finish',
          step2:'finish',
          step3:'process'
        }
    }
  }
  changeStepText(){
    let {steps} = this.props;
    steps.mileStone.step1 = 'selectTemplate'
    this.$dispatch(steps,'steps')
  }
  render(){
    console.log('render')
    console.log(this.state)
    console.log(this.$getState('steps'))
    const {steps} = this.props;

    return(
        <div style={{padding:'10px 20px',border:'solid 1px #efefef',margin:'10px 0'}}>
          <Steps>
            <Step status={this.state.stepStatus.step1} title={this.state.mileStone.step1} icon="book" />
            <Step status={this.state.stepStatus.step2} title={this.state.mileStone.step2}  icon="edit" />
            <Step status={this.state.stepStatus.step3} title={this.state.mileStone.step3}  icon="setting" />
          </Steps>
          <Button onClick={::this.changeStepText}>改变文字</Button>
          <span style={{color:'orange'}}>用shouldcomponentupdate来捕获</span>

          <p>{steps.text}</p>
        </div>

    )
  }
}

MySteps.propTypes = {
  status:PropTypes.number.isRequired
};

export default MySteps;
