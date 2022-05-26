import NewPost from '../../pages/NewPost'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Test <NewPost />', ()=>{

    test('Test page structure', ()=>{
        
        const wrapper = render(<NewPost/>)

        expect(wrapper).toMatchSnapshot()
    })

})