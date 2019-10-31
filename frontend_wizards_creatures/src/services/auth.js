import api from './api'
import * as jwt from 'jwt-decode';

let checkJWTValid = () => {

    let isJWTValid = false

    const token = localStorage.getItem('wu_token')
 
    if(token !== 'undefined' && token !== null){
        let decodedToken= jwt(token, {complete: true})
        let dateNow = new Date()

        if(decodedToken.exp < dateNow.getTime()){

            isJWTValid = true

        }else{
            isJWTValid = false
        }
}
    return isJWTValid
}



export default checkJWTValid