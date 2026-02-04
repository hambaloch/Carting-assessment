import { API_BASE } from '../config';

const getUserFromServer = async() =>{
    const res = await fetch(`${API_BASE}/api/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}

export default getUserFromServer