import { Switch,Route,Redirect } from 'react-router-dom'
import EventsList from './EventsList'
import AddEvents from './AddEvents'
import UploadEvents from './UploadEvents'

export default function Events(props) {
    return(
        <div className="contentWrp" >


            <div>
                    <Switch>
                        <Route path='/events/list' component={EventsList} />
                        <Route path='/events/add' component={AddEvents} />
                        <Route path='/events/upload' component={UploadEvents} />
                        <Redirect to='/events/list' />
                    </Switch>

                    </div>

        </div>
    )
}