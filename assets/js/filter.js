
const filterButton = document.querySelectorAll('.filter-button button')
const filterableCards = document.querySelectorAll('.filterable-cards .card')

console.log(filterButton)


const filterCards = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active')
    // console.log(e.target)

    // add hide class
    filterableCards.forEach(card => {
        card.classList.add('hide')
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name  === 'all'){
            card.classList.remove('hide')
        }
    })
}


filterButton.forEach(button => button.addEventListener('click', filterCards))


// for(i = 0; i < filterButton.length; i++){
//     filterButton[i].addEventListener('click', filterCards)
// }