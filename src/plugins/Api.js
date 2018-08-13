import axios from 'axios'

const __API_URL__ = "http://192.168.254.91:8000"

export default () => {
    return axios.create({
        'baseURL': __API_URL__,
        'headers': {
            'Content-Type': 'application/json'
        }
    })
}
