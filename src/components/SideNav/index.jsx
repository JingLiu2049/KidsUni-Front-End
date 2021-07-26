import logo from '../../assets/images/logo.jpeg'
import { NavLink, withRouter } from 'react-router-dom'
import './sideNav.less'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import navList from '../../configs/sideNavConfig'





function SideNav(props) {
  let currentPath = props.location.pathname
  return (
    <div className="siderWrp" >
      <div className="topLogo" >
        <img src={logo} alt="children uni" />
      </div >

      <Menu
        style={{ width: "100%", backgroundColor:"transparent"}}
        selectedKeys={[currentPath]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className="menu"
        theme='dark'
      >
        {
          navList.map((item)=>{
            return (
              <Menu.Item key= {item.key} icon={<MailOutlined />} >
              <NavLink className="navItem" to= {item.path}> {item.title} </NavLink>
              </Menu.Item>
            )
          })
        }
      </Menu>



    </div>
  )
}

export default withRouter(SideNav)