import { useEffect, useState } from "react"
import styled from "styled-components"
import { categoriesData } from "../data/categoriesData";



const Carusel = () => {

    const [activeCaruselCategory, setActiveCaruselCategory] = useState(categoriesData[0].category)

    
    const scrollChangeCategory = () => {

        let categoryHeadings = document.getElementsByClassName("category-heading");
        var categoryHeadingsArr = [...categoryHeadings]; 
        let viewportOffsetArray = categoryHeadingsArr.map(el => el.getBoundingClientRect().top)
        let positiveViewportOffsets = viewportOffsetArray.filter(el => el < 53)
        let activeOnViewportCategoryIndex = viewportOffsetArray.indexOf(Math.max(...positiveViewportOffsets))
        setActiveCaruselCategory(categoriesData[activeOnViewportCategoryIndex].category)  
        let activeCategory = document.getElementsByClassName("active")[0];
        activeCategory.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })

    }
        const categoryClick = () => {
            window.removeEventListener('scroll', scrollChangeCategory)
            let t = setTimeout(() => {
            let activeCategory = document.getElementsByClassName("active")[0];
            activeCategory.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            window.addEventListener('scroll', scrollChangeCategory)
        }, 500)


    } 

        useEffect(() => {
            window.addEventListener('scroll', scrollChangeCategory)
            const listfe = document.getElementById('carusel-list')
            listfe.addEventListener("click", categoryClick)
        }, [])
        
        
    return(
        <CaruselContainer id="carusel-container">
            <CaruselList id="carusel-list">
                {categoriesData.map((el, index) => {
                    return(
                        <CaruselItem 
                            key={index} 
                            className={activeCaruselCategory === el.category ? 'active' : ""}
                            onClick={() => 
                                {
                                    window.removeEventListener('scroll', scrollChangeCategory)
                                    setActiveCaruselCategory(el.category)
                                }}
                        >
                                <a href={`#${el.category}`}>{el.category}</a>
                        </CaruselItem>
                )})}
            </CaruselList>
        </CaruselContainer>
    )
}

export default Carusel

const CaruselContainer = styled.div`
    padding: .5em 0.5em;
    border-top:1px solid #E4E4E4;
    border-bottom:1px solid #E4E4E4;
    font-family: 'Ubuntu', sans-serif;
    font-size:.9em;
    overflow-y:auto;
    position: sticky;
    top: 0;
    background-color:white;

    &::-webkit-scrollbar {
        display: none;
      }
`

const CaruselList = styled.ul`
    display:flex;
    flex-direction:row;
    gap:.25rem;
    scroll-padding: 2em;
    margin-right:60px;position:relative;
    transition:.5s all easy;
`

const CaruselItem = styled.pre`
    padding: .5em 1em;
    border:1px solid #E4E4E4;
    border-radius:7px;
    width: max-content;
    block-size: fit-content;
    
    
    &.active{
        border:2px solid #DA510F;
        
        & a{
            color:#DA510F;
            font-weight:500;
            left:50%;
        }
         
    }

    & a{
        text-decoration:none;
        color:black;
    }

`