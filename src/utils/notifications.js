import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import { store } from 'react-notifications-component'

export const invalidCredentials = () => (
    store.addNotification({
        title: 'Credenciales Incorrectas',
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

export const connectionError = () => {
    console.log("connectionError")
    store.addNotification({
        title: 'Error de conexión',
        message: 'Ha ocurrido un error con la conexión ☹️',
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'bounceIn'],
        animationOut: ['animated', 'bounceOut'],
        dismiss: {
            duration: 400000000,
            onScreen: true
        }
    })
}

export const successfulExcuse = () => (
    store.addNotification({
        title: 'Creación Satisfactoria',
        message: 'Tu excusa ha sido enviada correctamente.',
        type: 'success',
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