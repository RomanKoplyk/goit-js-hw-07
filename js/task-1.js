const categoriesItem = document.querySelectorAll(`#categories .item`)
console.log(`Numbers of categories: ${categoriesItem.length}`)
categoriesItem.forEach(item => {
    const categName = item.querySelector(`h2`).textContent;
    const elementsCount = item.querySelectorAll(`ul li`).length;
    console.log(`Category: ${categName}`);
    console.log(`Elements: ${elementsCount}`)
})