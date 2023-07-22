const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
           return {...state, user: action.payload}    
        default:
            break;
    }
}


export default userReducer