import { saveImage } from "../../actions/images"
import { types } from "../../types/types"

describe('Testing redux actions', ()=>{
    test('Action must return the payload', ()=>{
        const payload = [{id:'1', imageUrl:'https://image.jpg'}]
        
        const action = saveImage(payload)

        expect(action).toEqual({type:types.images, payload})
    })
})