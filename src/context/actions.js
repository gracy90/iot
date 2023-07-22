export const loginUser = (dispatch, user) => {
    return dispatch({type:'LOGIN', payload:user})
}