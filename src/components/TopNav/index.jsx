import { Link} from 'react-router-dom';
import { Breadcrumb} from 'antd';
import { topNavList } from '../../configs/navConfigs';
import './topNav.less'


export default function TopNav(props) {
    const {pathSnippets} = props;

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        const navObj = topNavList.find(item=>item.path===url)
        return (
          <Breadcrumb.Item key={url} className="breadItem">
            <Link to={url}>{navObj.title}</Link>
          </Breadcrumb.Item>
        );
      });
      const breadcrumbItems = [
        <Breadcrumb.Item key="home" className="breadHead" >
          <Link to="/">Home</Link>
        </Breadcrumb.Item>,
      ].concat(extraBreadcrumbItems);
      return (
        <Breadcrumb className="bread" >{breadcrumbItems}</Breadcrumb>
      ) 

}

