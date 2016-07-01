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
          stepStatus:this.reduceStatus(this.props.status)
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
  }
  shouldComponentUpdate({steps}){
    console.info('shouldComponentUpdate','3')
    return true
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
  render(){
    console.log('render')
    console.log(this.state)
    console.log(this.$getState('steps'))
    const {steps} = this.props;

    return(
        <Steps>
          <Step status={this.state.stepStatus.step1} title={this.state.mileStone.step1} icon="book" />
          <Step status={this.state.stepStatus.step2} title={this.state.mileStone.step2}  icon="edit" />
          <Step status={this.state.stepStatus.step3} title={this.state.mileStone.step3}  icon="setting" />
        </Steps>
    )
  }
}

MySteps.propTypes = {
  status:PropTypes.number.isRequired
};

export default MySteps;
