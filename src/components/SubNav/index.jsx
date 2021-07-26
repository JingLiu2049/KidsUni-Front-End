import{withRouter} from 'react-router-dom';
import { Menu } from 'antd';
import './subNav.less'

function SubNav(props){
    const currentPath = props.location.pathname
    const navList=props.urls.navList
    const handleClick = e => {
        console.log('click ', e);
        props.history.push(e.keyPath[0])
      };

    return(
        <div className="subNavWrp" >
            <Menu mode="horizontal" onClick={handleClick} selectedKeys={currentPath} className="subNav" > 
             {
                 navList.map(item=>{
                     return(
                        <Menu.Item key={item.key} className="navItem" > {item.title} </Menu.Item>
                     )
                 })
             }
        </Menu>
        </div>
        
    )
    


}


export default withRouter(SubNav)