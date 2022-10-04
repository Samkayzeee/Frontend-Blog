import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import './Homepage.css'
import Card from "./Card";
import Footer from "./Footer";
const Homepage = () => {
    const [news, setNews] = useState([])
    const [determiner, setDeterminer] = useState(true)

    useEffect(() => {
       async function fetchNews() {
            try {
                setDeterminer(true)
            const response = axios.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=db429db159364e45bb381fa554b743e9')
            const result = await response
                console.log(result.data.articles);
                setNews(result.data.articles)        
            } catch (error) {
                console.log(error);
            }finally{
                setDeterminer(false)
            }
        }
        fetchNews()
    },[])
    return (<div>
        
        <Navbar />
        <div className="background"></div>
        <Card item={news} determ = {determiner}/>
        <Footer/>
    </div> );
}
 
export default Homepage;