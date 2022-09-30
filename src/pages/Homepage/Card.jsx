import "./Homepage.css";
import image from "../../assets/secondimage.webp";
import image1 from "../../assets/thirdimage.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
	const [name, setName] = useState(null)


	useEffect(() => {
		return setName(
			<div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdrop" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered ">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title fw-bold" id="staticBackdropLabel">Login to continue</h5>
							<button type="button" className=" btn btn-close" data-dismiss="modal" >

							</button>
						</div>
						<div className="modal-body text-start">
							<div className="text-dark hint"> We are place where you locate interesting articles and breaking news  </div>
						</div>
						<div className="w-75 mx-auto py-3">
							<button className="form-control p-2 mt-2 log"><Link className=" text-white hover text-decoration-none fw-bold">Log in</Link></button>
							<button className="form-control border-0  p-2 mt-2 create text-decoration-none "><Link className=" text-decoration-none "> Create account</Link></button>
						</div>


					</div>
				</div>
			</div>


		)
	}, [])


	return (
		<div className="containerr py-5 w-100 justify-content-center gap-5 d-flex flex-wrap">
			{props.item.map((value, index) => (
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
							<div className="title overflow-auto">
								<h5 className="card-title" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{value.title}</h5>
								{name}
							</div>
						</div>
						<div className="but1 w-100 d-flex justify-content-between ">
							<div>
								<button className="but" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<i className="fa-solid fa-heart px-3"></i> 57
								</button>
								{name}
							</div>
							<div>
								<button className="but" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<i className="fa-solid fa-comment px-3"></i> 6
								</button>
								{name}
							</div>
							<div>
								<button className="but" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<i className="fa-solid fa-eye px-3"></i> 138
								</button>
								{name}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Card;
