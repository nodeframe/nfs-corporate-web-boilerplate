import React, {Component} from 'react';
import classnames from 'classnames/bind';
import style from './navbar.scss';
import {Row, Col, Menu, Icon} from 'antd';

const c = classnames.bind(style);
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Logo = require('../../images/nfs-logo.svg');

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'mail'
    }
  }

  render() {
    return (
      <header id="header" className="clearfix">
        <Row>
          <Col xs={24} sm={24} md={6} lg={4}>
            <div className={c('navbarLogo')}>
              <a id="navbarLogoLink" href="/">
                <img src={Logo} alt="NFS Logo"/>
              </a>
            </div>
          </Col>
          <Col xs={24} sm={24} md={18} lg={20}>
            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail"/>Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="appstore"/>Navigation Two
              </Menu.Item>
              <SubMenu title={<span><Icon type="setting"/>Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    )
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    })
  }
}