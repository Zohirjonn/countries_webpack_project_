import '../css/main.css'
import request from './request'
import { createCountries } from './updateUI'
import "./filter"
import './dark_light_mode'

//api url
const API = "https://restcountries.com/v3.1/all"
//

request(API).then((data) => {
    createCountries(data)
}).catch((err) => {
    console.log(err.message)
})