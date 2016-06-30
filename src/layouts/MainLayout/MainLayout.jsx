import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';

class MainLayout extends Component{
  render(){
    const {children}=this.props;
    console.info('progress is in MainLayout')
    console.log('children:',children)
    return (
        <div className={styles.normal}>

        </div>
    );
  }
}

export default MainLayout;
