import * as type from '../Contains/SignInSignUp'
var initialState:any =[];

var SignInSignUp = (state = initialState, action:any) =>{
    switch(action.type){
        case type.LOGIN : 
            console.log(action);
            return [...state];
        case type.SIGNUP : 
            console.log(action);
            return [...state];
        default : return [...state]
    }
}
export default SignInSignUp;