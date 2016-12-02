import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Menu,Icon  } from 'antd';
import styles from './MenuConfig.less';

const SubMenu = Menu.SubMenu;

const MainLayout = React.createClass({

  getInitialState(){
    return {
      theme : "light",
    };

  },

  handleClick(e) {

    this.setState({
        current: e.key,
    });

  },

// 函数式声明组件//children如何传值
// const MainLayout = ({ children }) => {
  render(){
    return (
      <div className={styles.normal}>
        <div className={styles.head}>
          <h1>this is head</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.side}>
            {
              //注释方式
            /*<Link to="/">制度公告管理</Link><br />
            <Link to="/actived">Actived</Link><br />
            <Link to="/completed">Completed</Link><br />
            <Link to="/404">404</Link><br />*/}
            <Menu theme={this.state.theme}
                onClick={this.handleClick}
                style={{ width: 224 }}
                defaultOpenKeys={['sub1','sub2','sub3']}
                selectedKeys={[this.state.current]}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>first try</span></span>}>
                    <Menu.Item key="1"><Link to="/table"></Link>我的表格</Menu.Item>
                    <Menu.Item key="2"><Link to="/">我的表单</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/demo">user demo</Link></Menu.Item>
                    {/*<Menu.Item key="3"><Link to="/404">404</Link></Menu.Item>*/}
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>whatever~</span></span>}>
                    <Menu.Item key="5"><Link to="/"></Link>还没定</Menu.Item>
                    <Menu.Item key="6">还没定</Menu.Item>
                    <Menu.Item key="7">还没定</Menu.Item>
                    <Menu.Item key="8">还没定</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>bingo~</span></span>}>
                    <Menu.Item key="9">还没定</Menu.Item>
                    <Menu.Item key="10">还没定</Menu.Item>
                </SubMenu>
            </Menu>
          </div>
          <div className={styles.main}>
            {/*
              组件的所有子节点??
            */}
            {this.props.children}
          </div>
        </div>
        {
        // <div className={styles.foot}>
        //  this is foot
        // </div>
        }
      </div>
    );
  }
});

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
