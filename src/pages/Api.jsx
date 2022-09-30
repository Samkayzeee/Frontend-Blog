import axios from "axios";

const baseUrl  = ("https://newsapi.org/v2/top-headlines?country=gb&apiKey=db429db159364e45bb381fa554b743e9")

const http = axios.create({
    baseURL:baseUrl
})

export default http;