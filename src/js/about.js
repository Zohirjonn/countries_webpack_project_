import '../css/main.css'
import './dark_light_mode'
import request from './request'
import { createCountryInfo } from './updateUI'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
//API
const countryInfoApi = `https://restcountries.com/v3.1/${country}`
if(countryInfoApi){
    request(countryInfoApi).then((data) => {
        createCountryInfo(data[0])
    }).catch((err) => {
        console.log(err.message)
    })
}

const btn = document.querySelector('.back-button-wrapper')

btn.addEventListener('click', () => {
    window.history.back()
})