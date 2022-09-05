const initialState = {
    tasks: [
        {
            title: "Learn ReactJs",
            completed: false
        },
        {
            title: "Implement a todo application",
            completed: false
        },
        {
            title: "Learn useEffect",
            completed: true
        }
        ]
}

export default function todo(state=initialState, action){
    switch(action.type){
        case "ADD":
            return {
                ...state,
                tasks: [...state.tasks, {title: action.data, completed: false}]
            }
        case "COMPLETE":
        case "EDIT":
        case "REMOVE":
                const tempTasks = [...state.tasks]
                tempTasks.splice(action.data,1)
                return {
                    ...state,
                    tasks: tempTasks
                }
        default: 
            return state
    }
}