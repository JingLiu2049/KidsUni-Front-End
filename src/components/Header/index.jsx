import { withRouter } from 'react-router';
import './header.less';
import memoryUtil from '../../utils/memoryUtil'
import storeUtil from '../../utils/storeUtil';


function Header(props) {
    const { removeUser } = storeUtil;

    const handleLogout = () => {
        removeUser()
    }

    const title = props.location.pathname.split('/').filter(i=>i)[0]
    return (
        <div className="header" >

            <div className="title"> {title} </div>
            <div className="righterHeader" >
            <span className="welcome" >Welcome: {memoryUtil.user.name}</span>
            <a href="/login" type="link" onClick={handleLogout} >Logout</a>
            </div>

        </div>
    )
}
export default withRouter(Header)