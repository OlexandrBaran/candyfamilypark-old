import styled from "styled-components"
import {MdLocationOn, MdPhoneInTalk} from 'react-icons/md'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {AiOutlineInstagram} from 'react-icons/ai'


const Sidebar = ({sidebarClassName}) => {


    return(
        <SidebarContainer 
            className={sidebarClassName}
        >    
            <SidebarList>
                <h3>Контакти</h3>
                <li>
                    <MdLocationOn size={28}/>
                    <a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B0,+20,+%D0%86%D1%80%D1%88%D0%B0%D0%B2%D0%B0,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+90101/@48.3219948,23.0462751,17z/data=!3m1!4b1!4m5!3m4!1s0x4738353415f5ec8f:0x20285860c004cf6e!8m2!3d48.3219948!4d23.0484639">
                    Федорова 20, Іршава, Закарпатська область, Україна
                </a>
                </li>
                <li>
                    <MdPhoneInTalk size={28}/>
                    <a href="tel:+380672227228">+380672227228</a>
                </li>
            </SidebarList>

            <SidebarList>
                <h3>Ми в соцмережах</h3>
                <li>
                    <TiSocialFacebookCircular size={28}/>
                    <a href="https://www.facebook.com/profile.php?id=100083382060350">Facebook</a>
                </li>
                <li>
                    <AiOutlineInstagram size={28}/>
                    <a href="https://instagram.com/candy.familypark?igshid=NjZiMGI4OTY=">Instagram</a>
                </li>
            </SidebarList>
        </SidebarContainer>
    )
}

export default Sidebar;


const SidebarContainer = styled.div`
    position:absolute;
    background-color:white;
    top:0;
    left:-280px;
    width:280px;
    height:100vh; 
    font-family: 'Ubuntu', sans-serif;   
    z-index:100;



    &.active{
        animation: ani 0.5s forwards;
        box-shadow: 20px 0 5px -2px rgba(0,0,0, 0.5);

    }

    &.disactive{
        animation: aniBack 0.5s forwards;
    }

    @keyframes ani {
        0% {transform: translateX(-280px);}
        100% {transform: translateX(280px);}
    }
    @keyframes aniBack {
        0% {transform: translateX(280px);}
        100% {transform: translateX(-280px);}
    }
`

const SidebarList = styled.ul`
    margin:2em 0.5em 0 1em;

    & h3{
        font-weight:bold;
        color:#4F4F4F;
        font-size:0.8rem;
    }

    & li{
        padding:1rem;
        border-bottom:1px solid #E4E4E4;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        gap: 1rem;
        font-weight:300;
    }

    & a{
        text-decoration:none;
        color:#222222;
        display: block; 
        width: 100%; 
        height: 100%;
        line-height: 1.3em;
    }
`