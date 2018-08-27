export const status = {
    ACCESS_TOKEN_UNAVAILABLE: 1,
    ACCESS_TOKEN_REFRESHABLE: 2,
    ACCESS_TOKEN_EXPIRED: 3,
    ACCESS_TOKEN_INVALID: 4,
    EXPIRATION_UNAVAILABLE: 5,
    REFRESH_TOKEN_UNAVAILABLE: 6,
    REFRESH_TOKEN_EXPIRED: 7,
    TOKEN_TYPE_UNAVAILABLE: 8,
    INVALID_TOKEN_DATA: 9
}

export const authCreds = {
    client_id: 2,
    client_secret: 'MtgogAqTYR1Vrc9Gm0NYcNSVHX7oG03P5HRMvjO7',
    grant_type: 'password'
}

export const defaultTokenData = {
    token_type: 'Bearer',
    expires_in: null,
    access_token: null,
    refresh_token: null
}

export function checkValidTokenData(tokenData) {
    if (!(tokenData instanceof Object)) {
        return status.INVALID_TOKEN_DATA
    }
    else {
        for (let property in defaultTokenData) {
            if (!tokenData.hasOwnProperty(property))
                return status.INVALID_TOKEN_DATA
        }
    }

    return true
}

export function checkAccessTokenAvailable(tokenData) {

    if (tokenData.access_token === null)
        return status.ACCESS_TOKEN_UNAVAILABLE
    else if ((typeof tokenData.access_token ==='string') || (tokenData.access_token instanceof String))
        return true
    else
        return status.ACCESS_TOKEN_INVALID

}

export function checkAccessTokenValidity(tokenData) {

    if (Date.now() > parseInt(tokenData.expires_in))
        return status.ACCESS_TOKEN_EXPIRED

    return true

}

export function responseHasNoError(response) {
    return (Object.values(status).indexOf(response) === -1)
}