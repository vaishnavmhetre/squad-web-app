import axios from 'axios'
import authStore from '@/stores/auth/store'

const __API_URL__ = "http://192.168.0.104:8001"

export default () => {
    return axios.create({
        'baseURL': __API_URL__,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': authStore.state.token_type + ' ' + authStore.state.access_token
        }
    })
}
