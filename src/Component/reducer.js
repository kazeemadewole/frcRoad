export const initialState = {
    user : [],
    driver : [],
    Token : ''
};


const reducer = (state, action)  => {
    switch(action.type) {
        case 'ADD_USER' :
            
            return {
                ...state,
                user :  action.val
            };

        case 'ADD_TO_PASSENGER' :
            return {state};

        case 'TOKEN_INITIATION' :
            const token = `Driv${Math.floor((Math.random() * 100) + 1)}asf${Math.floor((Math.random() * 100) + 1)}`;
            
            return {
                ...state,
                driver : [...state.driver, action.val ],
                Token: token

            }

        default: 
            return state;
    }
}

export default reducer;