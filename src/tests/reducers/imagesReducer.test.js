import { imagesReducer } from "../../reducers/imagesReducer";
import { types } from "../../types/types";

describe('Testing reducers', ()=>{
    test('When type exitst and payload is passed, the state returned must be equal to passed payload', ()=>{
        const initialState = {}
        const images = [{id:'1', imageUrl:'https://image.jpg'}]

        const action = {
            type: types.images,
            payload:images
        }

        const state = imagesReducer(initialState, action)

        expect(state).toMatchObject(action.payload)
    })
    test('If type doesnt exists it must return an empty object', ()=>{
        const initialState = {}
        const images = [{id:'1', imageUrl:'https://image.jpg'}]

        const action = {
            type: 'not found',
            payload:images
        }

        const state = imagesReducer(initialState, action)

        expect(state).toMatchObject(initialState)
    })
})