const blogReducer = (state = [{
    Author: "",
    Content: "",
    Category: '',
    Title: ""
}], action) => {
    switch (action.type) {
        case "GET":
            console.log("get invoked")
            break;
        case "REMOVE":
            return state.filter(ele=>action.payload !==ele._id)
        case "SET":
            return action.payload
        case "EDIT":
            return state.map((ele)=>action.payload._id!==ele._id?ele:action.payload)
        case "ADD":
            return {...state, ...action.payload}
        case "LIKE":
            return state.map((ele)=>action.payload!==ele._id?ele:{...ele, Likes:ele.Likes?0:1})
        default:
            return state
    }

}
export default blogReducer;