//  import Navbar from "./Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "./dashboard.css"
import image1 from "../../assets/thirdimage.jpeg";
import Footer from "../Homepage/Footer";
import { Link,} from "react-router-dom";
import Nav from "./DashboardNav/Nav";
import http from "../Api";

function Dashboard() {
	let toggler = true
	const [news, setNews] = useState([])
	const [determiner, setDeterminer] = useState(true)

	useEffect(() => {
		async function fetchNews() {
			try {
				setDeterminer(true)
				const response = await http.get("")
				// const result = await response
				console.log(response.data.articles);
				setNews(response.data.articles)
			} catch (error) {
				console.log(error);
			}finally{
                setDeterminer(false)
            }
		}
		if (toggler) fetchNews()
		return () => {
			toggler = false
		}
	}, [])

	// const navigateTo = (title)=>{
	//     navigate(`/view/${title}`)
	// }



	return (
		<main>
			<Nav>
				<div className="background"></div>
				<section>
					<div className="containerr py-5 w-100 justify-content-center gap-5 d-flex flex-wrap">
						{determiner &&  news.length <= 0 &&
                            <div className="my-5" style={{display:"flex", justifyContent:"center"}}>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                Loading...
                            </div>
                        }

						{!determiner && news.length > 0 &&   news.map((value, index) => (
							<div
								className="cardd card position-relative rounded-0 mt-5 h-25"
								style={{ width: 23 + "rem" }}
								key={index}
							>
								<div className="img">
									<img
										src={value.urlToImage}
										className="card-img-top w-100 h-100 rounded-0"
										alt="..."
									/>
								</div>

								<div className="card-body p-0">
									<div className="w-100 d-flex py-5 flex-column mt-2 mb-2 p-2 text-center position-relative ">
										<div className="circle shadow rounded-circle position-absolute start-50 translate-middle top-0">
											<img src={image1} className="w-75 h-75 rounded-circle " />
										</div>
										<Link className="title overflow-auto" to={`/${value.title}/${index}`}>
											<h5 className="card-title">{value.title}</h5>

										</Link>
									</div>
									<div className="but1 w-100 d-flex justify-content-between ">
										<div>
											<button className="but">
												<i className="fa-solid fa-heart px-3"></i> 57
											</button>

										</div>
										<div>
											<button className="but">
												<i className="fa-solid fa-comment px-3"></i> 6
											</button>

										</div>
										<div>
											<button className="but">
												<i className="fa-solid fa-eye px-3"></i> 138
											</button>

										</div>
									</div>
								</div>
							</div>
						))}
						 { !determiner && news.length <= 0 && 
                            <div className="my-5" style={{display:"flex", justifyContent:"center"}}>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                <span className="spinner-grow"></span>
                                Loading...
                            </div>
                        }

					</div>
				</section>
				<Footer />
			</Nav>
		</main>

	);
}

export default Dashboard;