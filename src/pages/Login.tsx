import {FC} from 'react'
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'

const Login:FC = () => {
    const googleLogin = async()=>{
        const res = await signInWithPopup(auth,provider);
        console.log(res)
    }
  return (
    <div>
        <p>Log In with Google to continue</p>
        <button onClick={googleLogin}>LogIn with Google</button>
    </div>
  )
}

export default Login