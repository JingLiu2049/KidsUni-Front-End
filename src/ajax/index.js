import { message } from 'antd'
import axios from 'axios'
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

export const reqLogin = data => ajax('api/login', data, 'post')