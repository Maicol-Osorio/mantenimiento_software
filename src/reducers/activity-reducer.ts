import { activityT } from "../types"


export type activityActions =
    { type: "save-activity", payload: { newActivity: activityT } } |
    { type: "save-activityId", payload: { id: activityT["id"] } } |
    { type: "delect-activity", payload: {id: activityT["id"]}} | 
    {type: "clear-app"}


export type activityState = {
    activities: activityT[],
    activityId: activityT["id"]
}


const getLocalStorage = ()=>{
    const activityLocal = localStorage.getItem("activity")
    return activityLocal? JSON.parse(activityLocal) : []
}

export const initialState: activityState = {
    activities: getLocalStorage(),
    activityId: ""
}


export const activityReducer = (
    state: activityState = initialState,
    action: activityActions
) => {
    if (action.type === "save-activity") {

        return{
         
        }
    }

    if(action.type === "save-activityId"){
        return{
          
        }
    }

    if(action.type == "delect-activity"){

        return{

        }
    }

    if(action.type == "clear-app"){
        return{
        }

    }
    return state
}