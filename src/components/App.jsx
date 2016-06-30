import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import {Row,Col,Button,Input,Steps} from 'antd'

const style={
  main:{
    margin:'0 auto',
    width:'80%',
    padding:'30px 20px'
  }
}


const App = ({ location }) => {
  return (
    <div style={style.main}>
      <Row>
        <Col span={12}>
          <Button type="primary">提交</Button>
        </Col>
        <Col span={12}>
          right
        </Col>
      </Row>
    </div>
  );
};

App.propTypes = {
};

export default App;
