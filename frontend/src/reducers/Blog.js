
const blogReducer = async (state = {Author:"", Content:"",Category:'', Title:""}, action) => {
    switch (action.type) {
        case "GET":
            console.log("get invoked")
            break
        case "DELETE":
            console.log("delete invoked")
            break;
        case "SET":
            return action.payload
            
        default:
            return state
    }

}
export default blogReducer;