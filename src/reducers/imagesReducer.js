import { types } from "../types/types";

export const imagesReducer = (state={}, action) =>{

    switch (action.type) {
        case types.images:
            const {
                imageUrl, 
                imageName, 
                filterId, 
                like, 
                creationDate 
            } = action.payload
            return {
                imageUrl,
                imageName,
                filterId,
                like,
                creationDate
            }
        default:
            return state
    }

}