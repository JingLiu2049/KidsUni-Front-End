import './home.less'
import  memoryUtil  from '../../utils/memoryUtil'
import { Suspense} from 'react'
import { Redirect, Switch, Route} from 'react-router-dom';
import { Layout } from 'antd';
import SideNav from '../../components/SideNav';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import contentPageList from '../../configs/contentPagesConfig';

const {Footer, Sider, Content } = Layout;
export default function Home(props) {
    const user = memoryUtil.user;
    if (!user || !user._id) return <Redirect to="/login" />
        
    return (
      
        <Layout className='layout'style={{height:'100%'}} >
      <Sider className='sider' width="4rem"  >
          <SideNav />
      </Sider>
      <Layout >
        <Header />
        <Content style={{backgroundColor:'#EDF2F3'}}>

        <Suspense fallback={ <Loading/> } >
          <Switch>
            {
              contentPageList.map(item=>{
                return(
                  <Route path={item.path} component= {item.component} key={item.key}/> 
                )
              })
            }
            <Redirect exact from="/"  to="/dashboard" />
          </Switch>
          </Suspense>

        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )

}