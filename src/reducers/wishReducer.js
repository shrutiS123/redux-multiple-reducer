
const wishReducer = (state =[], action) => {
//always tke 2 param

if(action.type === 'ADD_WISH') {
    return [...state, action.payload]
    }
return state;

}
export default wishReducer;