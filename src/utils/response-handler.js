import { mapUser } from './data-mapping'
import { InvalidCredentials, ConnectionError } from './notifications'


export function handleLoginResponse(response, setCurrentUser, loginSuccess, setInvalidCredentials, setLoading) {
    if (response) {
        if (response.success) {
            let user = mapUser(response.resultData)
            setCurrentUser(user)
            localStorage.setItem('currentUser', JSON.stringify(user))
            console.log(user)
            loginSuccess()
        } else {
            setInvalidCredentials('error')
            InvalidCredentials()
            setLoading(false)
        }
    } else {
        ConnectionError()
    }

}