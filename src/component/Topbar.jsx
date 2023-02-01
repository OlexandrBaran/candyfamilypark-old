import styled from "styled-components";
import {AiOutlineClose} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import OutsideClick from "../functions/outsideClick";


const Topbar = () => {
    
    const [closeBtnClassName, setCloseBtnClassName] = useState('')
    const [sidebarClassName, setSidebarClassName] = useState("")


    const boxRef = useRef(null);
    const boxOutsideClick = OutsideClick(boxRef);

    useEffect(() => {
        if (boxOutsideClick) {
            setCloseBtnClassName("hidden")
            setSidebarClassName("disactive")
        }
      }, [boxOutsideClick]);
      
    return(
        <TopbarContainer ref={boxRef}>
            <BtnContainer>
                <Btn 
                    onClick={
                        () => {
                            setCloseBtnClassName("open")
                            setSidebarClassName("active")
                        }}
                >
                    <BiMenu size={28} />
                </Btn>
            </BtnContainer>
            <TopbarHeading><p>Меню</p></TopbarHeading>
            <Sidebar sidebarClassName={sidebarClassName} />
            <CloseBtn
                onClick={
                    () => {
                        setCloseBtnClassName("hidden")
                        setSidebarClassName("disactive")
                    }}
                className={closeBtnClassName}
            >
                <AiOutlineClose size={28}/>
            </CloseBtn>
            
        </TopbarContainer>
    )
}

export default Topbar;

const TopbarContainer = styled.div`
    width:100%;
    background:linear-gradient(0deg, #E4E4E4, #FFF);
    -moz-box-shadow: inset 0 -10px 10px -10px #000000;
    -webkit-box-shadow: inset 0 -10px 10px -10px #000000;
    box-shadow: inset 0 -10px 10px -10px #000000;
    position:relative;

`

const TopbarHeading = styled.div`
    text-decoration: none; 
    padding-top:1.5em;
    text-align:center;

    & p{
        font-family: 'Ubuntu', sans-serif;
        font-size:2em;
        font-weight:bold;
        display:inline-block;
        border-bottom:5px solid #DA510F;
        padding-bottom:.5em;
    }


`

const BtnContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    margin-right:1.5em;
`

const Btn = styled.button`
    background-color:#FFF;
    width:3.8em;
    height:2.8em;
    border:1px solid #E4E4E4;
    border-radius:10px;
    margin-top:1.2em;
    margin-left:0.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
`

const CloseBtn = styled.button`
    display:block;
    position:absolute;
    top:-3.5em;
    right:1.8em;
    padding:0.6em .8em;
    border-radius:10px;
    height:50px;
    color:white;
    background-color:#DA510F;
    border:none;
    
    &.open{
        animation: openAni 0.5s forwards;
        box-shadow: 9px 0 5px -2px rgba(0,0,0, 0.5);

    }

    &.hidden{
        animation: hiddenAni 0.5s forwards;
    }

    @keyframes openAni {
        0% {transform: translateY(-3.5em);}
        100% {transform: translateY(4.5em);}
    }
    @keyframes hiddenAni {
        0% {transform: translateY(4.5em);}
        100% {transform: translateY(-3.5em);}
    }
`