import { Switch,Route,Redirect } from 'react-router-dom'
import EventsList from './EventsList'
import AddEvents from './AddEvents'
import UploadEvents from './UploadEvents'
import UpdateEvents from './AddEvents'

export default function Events(props) {
    return(
        <div className="contentWrp" >


            <div>
                    <Switch>
                        <Route path='/events/list' component={EventsList} />
                        <Route path='/events/add' component={AddEvents} />
                        <Route path='/events/upload' component={UploadEvents} />
                        <Route path='/events/update' component={UpdateEvents}/>

                        <Redirect to='/events/list' />
                    </Switch>

                    </div>

        </div>
    )
}