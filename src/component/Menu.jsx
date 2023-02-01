import { menuData } from "../data/menuData";
import MenuCategoryBlock from "./MenuCategoryBlock";
import styled from 'styled-components'
import { categoriesData } from "../data/categoriesData";

const Menu = () => {

    return(
        <div id="menu">       
            {categoriesData.map((item) => {
                let menuItemsByCategory = [];
                menuData.forEach((dataItem) => {
                    if (dataItem.category === item.category) {
                        menuItemsByCategory.push(dataItem)
                    }
                })
                return (
                    <div key={item.id}>
                        <CategoryHeading
                        className="category-heading"
                            id={`${item.category}`}
                           style={{backgroundImage:`url(${item.image})`}}
                        ><p>{item.category}</p>
                        </CategoryHeading>
                        <MenuCategoryBlock data={menuItemsByCategory}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;

const CategoryHeading = styled.div`
    padding: .8em 0;
    color:white;
    -webkit-text-stroke: 2px black; /* width and color */
    background-color:#FFFFFF;
    text-align:center;
    font-family: 'Ubuntu', sans-serif;
    font-size:1.75em;
    font-weight:700;
    scroll-margin-top:1.75em;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    


& p{
            top:0.75em;;
            left:35%;
        }
`