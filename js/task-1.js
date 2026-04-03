const categoriesItem = document.querySelectorAll(`#categories .cat-item`)
console.log(`Numbers of categories ${categoriesItem.length}`)
categoriesItem.forEach(item => {
    const categName = item.querySelector(`.cat-subtitle`).textContent;
    const elementsCount = item.querySelectorAll(`.elem-item`).length;
    console.log(`Category: ${categName}`);
    console.log(`Elements: ${elementsCount}`)
})