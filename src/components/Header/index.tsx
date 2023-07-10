import { HeaderDiv } from "./styles"
import Img from '../../../public/github.png'
const Header = () => {
    return ( <>
        <HeaderDiv>
            <img src={Img}/>
            <h1>GitHub</h1>
            <h3>/</h3>
            <h4>Profile</h4>
        </HeaderDiv>
        </>
    )
}

export default Header;