import React from 'react'
import logo from '../../assets/images/logo.jpeg'
import { withRouter } from 'react-router-dom'
import './sideNav.less'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import navList,{rootSubmenuKeys} from '../../configs/navConfigs'
import {useComponentWillMount} from '../../utils/hooks'





function SideNav(props) {
  const { SubMenu } = Menu;
  // get currentPath
  let currentPath = props.location.pathname

  // declare the initial opened sub menu key based on current path
  let initOpenSub = null
  useComponentWillMount(()=>{
    initOpenSub = `/${currentPath.split('/').filter(i => i)[0]}`
  })
  // set initially opened sub menu 
  const [openKeys, setOpenKeys] = React.useState([initOpenSub]);

  // function to handle menu item click
  const handleClick = e => {
    props.history.push(e.key)
  }

  // fucntion to open and close sub-menu
  const onOpenChange = keys => {
    console.log('openKeys',openKeys)
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      console.log('keys',keys)
      setOpenKeys(keys);
    } else {
      console.log('else',latestOpenKey ? [latestOpenKey] : ['nothing'])
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // function to create menu items based on data from navConfigs.js
  const getNavNodes = navList => {
    return navList.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={<MailOutlined />} title={item.title} className="navItem">
            {getNavNodes(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item className="navItem" key={item.key} icon={<MailOutlined />} >{item.title}</Menu.Item>
        )
      }
    })
  }
  const navNotes = getNavNodes(navList)

  return (
    <div className="siderWrp" >
      <div className="topLogo" >
        <img src={logo} alt="children uni" />
      </div >

      <Menu
        style={{ width: "100%", backgroundColor: "transparent" }}
        selectedKeys={[currentPath]}
        mode="inline"
        className="menu"
        theme='dark'
        onClick={handleClick}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
      >
        {navNotes}
      </Menu>



    </div>
  )
}

export default withRouter(SideNav)




