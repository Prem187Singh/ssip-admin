import axios  from "axios";
import base_url from '../base_url';

const expireToken = async (refreshToken,next)=>{
    axios.post(`${base_url}/auth/api/token/refresh/`,{
        "refresh":refreshToken
    })
    .then((response)=>{
        return next(null,response)
    })
    .catch((error)=>{
        return next(error)
    })
}
export default expireToken