export function addTask(value){
    return {
        type: "ADD",
        data: value
    }
}
export function markCompleteTask(index){
    return {
        type: "COMPLETE",
        data: index
    }
}
export function editTask(value,index){
    return {
        type: "COMPLETE",
        data: {value: value, index:index}
    }
}
export function removeTask(index){
    return {
        type: "REMOVE",
        data: index
    }
}