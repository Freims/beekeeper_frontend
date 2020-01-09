import 'animate.css'
import { toast } from 'react-toastify'
import './notifications.scss'

export const invalidCredentials = () => (
    toast.error('Credenciales Incorrectas', { bodyClassName: "grow-font-size" })
)

export const connectionError = () => {
    toast.error('Ha ocurrido un error con la conexión ☹️', { bodyClassName: "grow-font-size" })
}

export const successfulExcuse = () => (
    toast.success('Tu excusa ha sido enviada satisfactoriamente.', { bodyClassName: "grow-font-size" })
)

export const successfulNotice= () => (
    toast.success('Tu aviso ha sido enviado satisfactoriamente.', { bodyClassName: "grow-font-size" })
)


export const warn = (text) => toast.warn(text, { bodyClassName: "grow-font-size" });
export const success = (text) => toast.success(text, { bodyClassName: "grow-font-size" });
export const error = (text) => toast.error(text, { bodyClassName: "grow-font-size" });
export const info = (text) => toast.info(text, { bodyClassName: "grow-font-size" }); 