import styled from "styled-components"
import {GiScales} from 'react-icons/gi'


const MenuCategoryBlock = ({data}) => {
   

    return(
        <div>
           
            {data.map((item) => {

                return (
                <MenuItem key={item.id}>
                    <MenuItemTitle>{item.name}</MenuItemTitle>
                    <MenuItemPrice>{item.price} грн</MenuItemPrice>
                    {item.components && <MenuItemComponents>{item.components}</MenuItemComponents>}
                    {item.weight && <MenuItemWeight><GiScales style={{paddingRight:"5px"}}/>{item.weight}</MenuItemWeight>}
                </MenuItem>
            )})}
        </div>
    )
}

export default MenuCategoryBlock;

const MenuItem = styled.div`
    border-bottom:1px solid #E4E4E4;
    border-top:1px solid #E4E4E4;
    padding:.8em 1em;
    font-family: 'Ubuntu', sans-serif;
`

const MenuItemTitle = styled.p`
    font-size:1.15em;
    font-weight:700;
    padding:0.25em 0;
`

const MenuItemPrice = styled.p`
    font-size:0.95em;
    font-weight:700;
    padding:0.25em 0;
    color:#DA510F;
`

const MenuItemComponents = styled.p`
    font-size:0.8em;
    font-weight:400;
    padding:0.25em 0;
    color:#222222;
    width:70%;
    line-height: 1.2em;
`

const MenuItemWeight = styled.p`
    font-size:0.8em;
    font-weight:500;
    padding:0.25em 0;
    color:#828282;
`