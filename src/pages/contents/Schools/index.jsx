import { Switch,Route,Redirect } from 'react-router-dom'
import SchoolsList from './SchoolList'
import AddSchools from './AddSchools'
import UploadSchools from './UploadSchools'

export default function Schools(props) {
    return(
        <div className="contentWrp" >


            <div>
                    <Switch>
                        <Route path='/schools/list' component={SchoolsList} />
                        <Route path='/schools/add' component={AddSchools} />
                        <Route path='/schools/upload' component={UploadSchools} />
                        <Redirect to='/schools/list' />
                    </Switch>

                    </div>

        </div>
    )
}