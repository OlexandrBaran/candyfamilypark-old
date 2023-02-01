import styled from 'styled-components'
import {IoIosArrowUp} from 'react-icons/io'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {

  

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };


    return(
        <div style={{height:"auto", width:"100%"}}>
           <ScrollButtonContainer> 
                <ScrollButton onClick={scrollToTop}>
                     <IoIosArrowUp size={28} /><br/>
                     <p> На початок</p>
                </ScrollButton>
            </ScrollButtonContainer>
            <Contacts>
                    <h3>Контакти</h3>
                        <li>
                            <a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B0,+20,+%D0%86%D1%80%D1%88%D0%B0%D0%B2%D0%B0,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+90101/@48.3219948,23.0462751,17z/data=!3m1!4b1!4m5!3m4!1s0x4738353415f5ec8f:0x20285860c004cf6e!8m2!3d48.3219948!4d23.0484639">
                            Федорова 20, Іршава, Закарпатська область, Україна
                        </a>
                        </li>
                        <li>
                            <a href="tel:+380672227228">+380672227228</a>
                        </li>
                    
                    <h3>Графік роботи</h3>
                        <li>
                            <p>Працюємо з 11:00 до 23:00</p>
                        </li>
                    <h3>Ми в соцмережах</h3>
                        <li>
                            <TiSocialFacebookCircular size={28}/>
                            <a href="https://www.facebook.com/profile.php?id=100083382060350">Facebook</a>
                        </li>
                        <li>
                            <AiOutlineInstagram size={28}/>
                            <a href="https://instagram.com/candy.familypark?igshid=NjZiMGI4OTY=">Instagram</a>
                        </li>
                        <h3>На карті</h3>
                        <MapContainer>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5305.911264212888!2d23.0473105!3d48.3229343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738353415f5ec8f%3A0x20285860c004cf6e!2z0LLRg9C7LiDQpNC10LTQvtGA0L7QstCwLCAyMCwg0IbRgNGI0LDQstCwLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDkwMTAx!5e0!3m2!1suk!2sua!4v1669498274791!5m2!1suk!2sua" style={{ border:"1px solid #E4E4E4"}} title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </MapContainer>
                </Contacts>
                <Rights>Candy Family Park. {new Date().getFullYear()}. Всі права захищено.</Rights>
        </div>
    )
}

export default Footer;

const ScrollButtonContainer = styled.div`
   
    display:flex;
    flex-direction: row;
    justify-content:center;
    border:1px solid #E4E4E4;

`

const ScrollButton = styled.button`
    width:90vw;
    height:auto;
    margin:1.2em;
    background-color:inherit;
    border:1px solid #E4E4E4;
    border-radius:10px;
    color:black;
    padding-top:1em;


    & p{
        padding-bottom:1em;
        font-family: 'Ubuntu', sans-serif;
        font-size:0.95em;
        font-weight:300;
    }
`

const Contacts = styled.div`
    margin:1.5em 1em 0 1em;
    font-family: 'Ubuntu', sans-serif;
    height:600px;

    & h3{
        font-weight:bold;
        color:#4F4F4F;
        font-size:1rem;
        margin:1.2em 0 0.5em;
    }

    & li{
        padding:0.5rem 0;
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

const MapContainer = styled.div`
    display:flex;
    justify-content:center;
    padding-top:1em
`

const Rights = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-weight:300;
    font-size:0.8rem;
    text-align:center;
    border-top:1px solid #E4E4E4;
    padding:10px 0;

`