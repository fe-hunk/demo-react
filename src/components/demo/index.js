/**
 * Created by lujiaju on 16/7/11.
 */
import React, { Component, PropTypes } from 'react';
import {Row,Col,Button,Input,Steps,Select} from 'antd'
import {connect} from  'react-redux'
import update from 'react/lib/update';
import {customers} from '../../constant'
import './less/main.less'

const style={
  main:{
    margin:'0 auto',
    width:'80%',
    padding:'30px 20px'
  }
}

const Step = Steps.Step
const Option = Select.Option
//@connect(({app})=>({app}))
class Demo extends Component{
  constructor(props){
    super()
    this.state = {
      inputs:'',
      selects:'',
      qa:'',
      sum:'10'
    }
  }
  componentWillMount(){
    console.log(customers)
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

  }
  handleChange(){

  }
  render(){
    return(
        <div style={style.main}>
          <Row>
            <Col>
              <span>总共<span>{this.state.sum}</span>题</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={::this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={::this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
        </div>
    )
  }
}

Demo.propTypes = {
};

export default Demo;
