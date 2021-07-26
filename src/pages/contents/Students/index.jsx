import { Switch,Route,Redirect } from 'react-router-dom'
import { studentsNav } from "../../../configs/subNavConfig"
import SubNav from "../../../components/SubNav"
import StudentsList from './StudentsList'
import AddStudents from './AddStudents'
import UploadStudents from './UploadStudents'

export default function Students(props) {
    // const StudentsList = lazy(()=>import('./StudentsList'))
    // const AddStudents = lazy(()=>import('./AddStudents'))
    // const UploadStudents = lazy(()=>import('./UploadStudents'))
    return(
        <div className="contentWrp" >

            <SubNav urls={studentsNav} />


            <div>
                    <Switch>
                        <Route path='/students/list' component={StudentsList} />
                        <Route path='/students/add' component={AddStudents} />
                        <Route path='/students/upload' component={UploadStudents} />
                        <Redirect to='/students/list' />
                    </Switch>

                
            </div>

        </div>
    )
}