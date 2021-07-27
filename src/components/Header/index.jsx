import { withRouter } from 'react-router';
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


import memoryUtil from '../../utils/memoryUtil'
import storeUtil from '../../utils/storeUtil';
import TopBreadcrumb from'../TopNav'
import LinkButton from '../LinkButton';
import './header.less';


function Header(props) {
    const { removeUser } = storeUtil;
    const { confirm } = Modal;

    const handleLogout = () => {
        confirm({
            title: 'Do you Want to Logout?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                removeUser()
                memoryUtil.user={}
                props.history.replace('/')
            }
          });
        
    }
    let pathSnippets = props.location.pathname.split('/').filter(i => i)
    let title = pathSnippets[0]
    return (
        <div className="header" >
            <div className="upper">
                <div className="title"> {title} </div>
                <div className="righterHeader" >
                    <span className="welcome" >Welcome: {memoryUtil.user.name}</span>
                    <LinkButton onClick={handleLogout} className="logoutBtn">Logout</LinkButton>
                </div>
            </div>

            <TopBreadcrumb pathSnippets={pathSnippets} />
        </div>
    )
}
export default withRouter(Header)