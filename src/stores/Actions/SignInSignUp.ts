import * as type from '../Contains/SignInSignUp'

export const LoginAPI = ()=> {
   return (dispatch:any) =>{
        return {
            //   Call API
      }
   }
}

// Check login
export const CkeckLogin = (username:string, password:string)=>{  
    return {
        type:type.LOGIN,
        username,
        password
    }
}

export const SignUpAPI = ()=> {
    return (dispatch:any) =>{
         return {
             //   Call API
       }
    }
 }

export const CkeckSignUp = (Newuser:any)=>{  
    return {
        type:type.SIGNUP,
        Newuser
    }
}