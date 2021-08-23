import { message } from 'antd'
import axios from 'axios'
const BASE = 'http://localhost:3000/api/'
function ajax(url, data = {}, type = 'get') {
    
    return (
        new Promise((resolve, reject) => {
            axios({ method: type, url, data })
                .then(
                    response => {resolve(response.data)},
                    error => {
                        message.error('Your connection is unstable, please try later!')
                        console.log(error.message)
                    }
                )
        })
    )
}

export const reqLogin = data => ajax(BASE+'login', data, 'post')
export const reqEvents = () => ajax(BASE+'events')
export const reqDeleteEvent = _id => ajax(BASE+'events/delete',{_id},'delete')
export const reqUpdateEvent = data =>ajax(BASE+'events/update',data,'post')
export const reqAddEvent = data =>ajax(BASE+'events/add',data,'post')




