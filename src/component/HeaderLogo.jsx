import styled from "styled-components"
import logo from "../static/logo.png"

const HeaderLogo = () => {
    return <Image src={logo}/>
}

export default HeaderLogo;

const Image = styled.img`
    width:100%;
    height:auto;
    box-shadow: 0px 0px 10px 2px #000000;

`