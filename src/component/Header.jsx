import HeaderLogo from './HeaderLogo'
import Schedule from './Schedule'
import Topbar from './Topbar'



const Header = () => {
    return(
        <>
            <header>  
                <Topbar/>
                <HeaderLogo/>
                <Schedule/>
            </header>
        </>
    )
}

export default Header