import { withRouter } from 'react-router';
import './header.less';
import memoryUtil from '../../utils/memoryUtil'
import storeUtil from '../../utils/storeUtil';
import TopBreadcrumb from'../TopNav'


function Header(props) {
    const { removeUser } = storeUtil;

    const handleLogout = () => {
        removeUser()
    }
    let pathSnippets = props.location.pathname.split('/').filter(i => i)
    let title = pathSnippets[0]
    return (
        <div className="header" >
            <div className="upper">
                <div className="title"> {title} </div>
                <div className="righterHeader" >
                    <span className="welcome" >Welcome: {memoryUtil.user.name}</span>
                    <a href="/login" type="link" onClick={handleLogout} >Logout</a>
                </div>
            </div>

            <TopBreadcrumb pathSnippets={pathSnippets} />
        </div>
    )
}
export default withRouter(Header)