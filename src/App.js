import { Fragment, lazy, Suspense} from 'react';
import{Switch,Route} from 'react-router-dom'
import Loading from './components/Loading'
import Login from './pages/Login'



export default function App(props) {
    const Home = lazy(()=> import('./pages/Home'))
    return(
        <Fragment>
        
        <Switch>
        <Route path='/login' component= {Login} />    
        <Suspense fallback={ <Loading/> } >
        <Route path='/' component= {Home} />   
        </Suspense>
        </Switch>
        </Fragment>
    )
}