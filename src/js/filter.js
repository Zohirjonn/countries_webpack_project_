import { createCountries } from "./updateUI"
import request from "./request"


const searchEl = document.querySelector('.search')
searchEl.search.addEventListener('input', () => {
    const searchValue = searchEl.search.value.toLowerCase()
    const cardsItem = document.querySelectorAll('.cards__item')
    const cardsTitles = document.querySelectorAll('.cards__title')
    cardsTitles.forEach((title, i) => {
        if(title.textContent.toLowerCase().includes(searchValue)){
            cardsItem[i].style.display = 'block'
        }else{
            cardsItem[i].style.display = 'none'
        }
    })
})
//
const searchSelectSpan = document.querySelector(".search__select span")
const searchSelectList = document.querySelectorAll('.search__select-list li')
//
searchSelectList.forEach((li) => {
    li.addEventListener('click', () => {
      searchSelectSpan.textContent= li.textContent
        let filterApi;
        if(li.textContent == 'All'){
            filterApi = 'https://restcountries.com/v3.1/all'
        }else{
            filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`
        }
        request(filterApi).then((data) => {
            createCountries(data)
        }).catch((err) => {
            console.log(err.message)
        })
    })
})

