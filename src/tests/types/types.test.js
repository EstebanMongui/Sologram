import { types } from '../../types/types'

describe('Testing redux types', ()=>{
    test('Types structure must be equal', ()=>{
        const baseTypes = {images:'Images'}

        expect(types).toMatchObject(baseTypes)
    })
})