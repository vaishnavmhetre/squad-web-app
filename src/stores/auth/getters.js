import {checkAccessTokenAvailable, checkAccessTokenValidity, responseHasNoError} from '@/plugins/utilities/AuthUtilities'

export default {
    isAuthenticated: (state) => {
        return (responseHasNoError(checkAccessTokenAvailable(state)) && responseHasNoError(checkAccessTokenValidity(state)))
    }
}