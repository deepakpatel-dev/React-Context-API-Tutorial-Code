export const initialState = {
    user:null,
}

const reducer = (state,action) =>{
    console.log(action);
    switch (action.type) {
        // it is like a listener 
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

            default :
            return state;
    }
}

export default reducer;