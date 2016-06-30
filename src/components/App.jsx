import React, { Component, PropTypes } from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import {Row,Col,Button,Input,Steps} from 'antd'
import {connect} from  'react-redux'
import MySteps from './Steps'

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
  }
  render(){
    const {app,steps} = this.props;
    console.log(app)
    return(
        <div style={style.main}>
          <div>
            <Row>
              <Col span={24}>
                <MySteps status="one"/>
              </Col>
            </Row>
          </div>
        </div>
    )
  }
}

App.propTypes = {
};

export default App;
