import { types } from "../types/types";

export const imagesReducer = (state={}, action) =>{

    switch (action.type) {
        case types.images:
            return action.payload
        default:
            return state
    }

}