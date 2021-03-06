import { render } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/router', ()=>{
    return {
        useRouter(){
            return{
                pathname: '/'
            }
        }
    }
})

describe('ActiveLink component', ()=>{
    it('should render correctly', ()=>{
        const { getByText } = render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )
    
        expect(getByText('Home')).toBeInTheDocument()
    })
    
    it('should receive active class', ()=>{
        const { getByText } = render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )
    
        expect(getByText('Home')).toHaveClass('active')
    })
})

