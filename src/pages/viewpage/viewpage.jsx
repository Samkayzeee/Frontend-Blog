import profile from "../../assets/thirdimage.jpeg"
import Footer from "../Homepage/Footer"
import "./viewpage.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
// import axios from "axios"
import Nav from "../Dashboard/DashboardNav/Nav"
import http from "../Api"
function View() {
    let toggler = true
    let { uid } = useParams()
    const [news, setNews] = useState([])
    const [determiner, setDeterminer] = useState(true)


    useEffect(() => {
        async function fetchNews() {
            try {
                setDeterminer(true)
                // const response = axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=db429db159364e45bb381fa554b743e9`)
                const result = await http.get("")
                console.log(result.data.articles[`${uid}`])
                let mainNews = result.data.articles[`${uid}`]
                news.push(mainNews)

            } catch (error) {
                console.log(error);
            } finally {
                setDeterminer(false)
            }
            setNews([...news])
        }
        if (toggler) fetchNews()
        return () => {
            toggler = false
        }
    }, [])




    return (
        <section>
            <Nav>

                <main className="pt-3 d-flex containers gap-3 pe-3">
                    <div className="commentsec">
                        <div className=' w-100 '>
                            <button className='py-3 ' data-bs-placement="bottom" data-bs-toggle="tooltip" title="Like" title="Like"><i className="fa-solid fa-heart px-3"></i> 57</button>
                            <button className='py-3' data-bs-placement="bottom" data-bs-toggle="tooltip" title="Comment"><i className="fa-solid fa-comment px-3"></i> 6</button>
                            <button className='py-3' data-bs-placement="bottom" data-bs-toggle="tooltip" title="View" ><i className="fa-solid fa-eye px-3"></i> 138</button>
                        </div>
                    </div>

                    <div className="News">
                        {determiner && news.length <= 0 &&
                            <div className="my-5" style={{ display: "flex", justifyContent: "center" }}>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                Loading...
                            </div>
                        }


                        {!determiner && news.length > 0 &&
                            news.map((value, index) =>
                                <main key={index}>
                                    <div>
                                        <div >
                                            <img width={"100%"} style={{ borderTopRightRadius: "7px", borderTopLeftRadius: "7px" }} src={value.urlToImage} alt="" />
                                        </div>
                                    </div>
                                    <div className="px-5 mx-4">
                                        <header className="position-relative px-4  py-4 mt-5">
                                            <div className="circle shadow rounded-circle  translate-middle  position-absolute top-0 ">
                                               <img src={profile} className="w-75 h-75 rounded-circle " alt="" />
                                            </div>
                                        </header>
                                        <div>
                                            <h1 className="py-3">{value.title}</h1>
                                            <p className="content">{value.content}</p>
                                        </div>
                                    </div>
                                </main>
                            )
                        }
                        {!determiner && news.length <= 0 &&
                            <div className="my-5" style={{ display: "flex", justifyContent: "center" }}>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                Loading...
                            </div>
                        }


                    </div>
                    <div className="Profile">

                    </div>
                </main>
                <Footer />
            </Nav>
        </section>



    )
}
export default View