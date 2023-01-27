const blogReducer = (state = {Author:"", Content:"",Category:'', Title:""}, action) => {
    switch (action.type) {
        case "GET":
            console.log("get invoked")
        case "DELETE":
            console.log("delete invoked")
        default:
            return state
    }

}

export default blogReducer;