const nameReducer = (state ='', action) => {
//always tke 2 param
console.log(action)
if(action.type === 'CHANGE_NAME') {
    return action.payload
}
return state;

}
export default nameReducer;