import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import { store } from 'react-notifications-component'

const InvalidCredentials = () => (
    store.addNotification({
        title: 'Credenciales Inválidas',
        message: 'Por favor intenta de nuevo.',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'bounceIn'],
        animationOut: ['animated', 'bounceOut'],
        dismiss: {
            duration: 4000,
            onScreen: true
        }
    })
)

const ConnectionError = () => (
    store.addNotification({
        title: 'Error de conexión',
        message: 'Ha ocurrido un error con la conexión ☹️',
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'bounceIn'],
        animationOut: ['animated', 'bounceOut'],
        dismiss: {
            duration: 4000,
            onScreen: true
        }
    })
)

export {
    InvalidCredentials,
    ConnectionError
}