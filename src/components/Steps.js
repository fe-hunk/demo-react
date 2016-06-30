/**
 * Created by lujiaju on 16/7/1.
 */
import React, { Component, PropTypes } from 'react';
import {Row,Col,Button,Input,Steps} from 'antd'
import {connect} from  'react-redux'

const Step = Steps.Step

@connect(({steps})=>({steps}))
class MySteps extends Component{
  constructor(props){
    super()
  }
  componentWillMount(){
    console.info('componentWillMount','1')
  }
  componentWillReceiveProps({steps}){
    console.info('componentWillReceiveProps','2')
  }
  shouldComponentUpdate(){
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
      case 'one':
        console.log('haha');
    }
  }
  render(){
    return(
        <Steps>
          <Step status="finish" title="选择模板" icon="book" />
          <Step status="process" title="编辑表单" icon="edit" />
          <Step status="wait" title="生成表单" icon="setting" />
        </Steps>
    )
  }
}

MySteps.propTypes = {
  status:PropTypes.string.isRequired
};

export default MySteps;
