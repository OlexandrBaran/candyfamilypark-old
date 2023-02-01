export default function getUniqueCategories(menuItems) {
    let categories = getCategories(menuItems)
    let unigueCategoriesArr = [];
    categories.forEach(element => {
        if (!unigueCategoriesArr.includes(element)) {
            unigueCategoriesArr.push(element)
        }
    });

    return unigueCategoriesArr;
}

function getCategories(menuItems) {
    let categories = [];
    menuItems.forEach(element => {
        categories.push(element.category)
    });

    return categories;
}